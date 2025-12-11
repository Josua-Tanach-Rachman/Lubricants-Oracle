import { Dialog, DialogContent, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import './SearchPopup.css'
import React, { useRef, useState, useCallback, useMemo } from 'react'

interface CustomPopoverProps {
    anchorEl: HTMLElement | null
    children: React.ReactNode
    onMouseEnter: () => void
    onMouseLeave: () => void
}

const CustomPopover: React.FC<CustomPopoverProps> = ({
    anchorEl,
    children,
    onMouseEnter,
    onMouseLeave,
}) => {
    if (!anchorEl) {
        return null
    }

    const anchorRect = anchorEl.getBoundingClientRect()
    
    const style: React.CSSProperties = {
        position: 'fixed',
        top: anchorRect.top + anchorRect.height / 2,
        left: anchorRect.right,
        transform: 'translateY(-50%)',
        zIndex: 1300,
        pointerEvents: 'auto',
    }

    return (
        <div
            className="sp-popover-paper"
            style={style}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {children}
        </div>
    )
}

interface SearchPopupProps {
    isOpen: boolean
    onClose: () => void
}

interface CategoryItem {
    name: string
    count: number
}

const categories: CategoryItem[] = [
    { name: 'Compressors', count: 17 },
    { name: 'Engine Oils', count: 21 },
    { name: 'Environmentally Responsible', count: 1 },
    { name: 'Gear Oils', count: 33 },
    { name: 'Grease Applications', count: 14 },
    { name: 'Hydraulics', count: 31 },
    { name: 'Other', count: 16 },
    { name: 'Refrigeration Systems', count: 12 },
    { name: 'Seal Oil Systems', count: 1 },
    { name: 'Subsea Equipment', count: 13 },
    { name: 'Transmissions', count: 3 },
    { name: 'Turbine Oils', count: 4 },
    { name: 'Turbines', count: 10 },
    { name: 'Workshops And Maintenance', count: 5 },
    { name: 'EAL, Environmentally Acceptable Lubricant', count: 10 },
    { name: 'Stern Tube Oils', count: 3 },
]

const subCategories: Record<string, CategoryItem[]> = {
    "Compressors": [
        { "name": "Air Compressors - Reciprocating Crankcase", "count": 6 },
        { "name": "Air Compressors - Rotary Screw", "count": 3 },
        { "name": "Gas Compressors - Reciprocating Cylinder", "count": 8 }
    ],
    "Engine Oils": [
        { "name": "Diesel Engines - Crankcase", "count": 16 },
        { "name": "Gas Engine", "count": 2 },
        { "name": "Gas Engines - Crankcase", "count": 3 }
    ],
    "Gear Oils": [
        { "name": "Gearboxes", "count": 3 },
        { "name": "Gearboxes - Epicyclic", "count": 7 },
        { "name": "Gearboxes - Extreme Heavy Duty", "count": 7 },
        { "name": "Gearboxes - Heavy Duty", "count": 9 },
        { "name": "Gearboxes - High Temp", "count": 9 },
        { "name": "Gearboxes - Light Duty", "count": 7 },
        { "name": "Gearboxes - Spiral Bevel", "count": 7 },
        { "name": "Gearboxes - Spur", "count": 7 }
    ],
    "Environmentally Responsible": [
        { "name": "Dewatering Protective", "count": 1 },
        { "name": "EAL, Environmentally Acceptable Lubricant", "count": 10 }
    ],
    "Grease Applications": [
        { "name": "Bearings - Plain", "count": 1 },
        { "name": "Bearings - Rolling Element", "count": 1 },
        { "name": "Cables - Wire Rope", "count": 1 },
        { "name": "Couplings - Gear", "count": 1 },
    ],
    "Hydraulics": [
        { "name": "Hydraulic Systems - General", "count": 10 },
        { "name": "Hydraulic Systems - Subsea", "count": 5 },
        { "name": "Hydraulic Systems - Water Based", "count": 6 }
    ],
    "Other": [
        { "name": "General Lubrication", "count": 10 },
        { "name": "Heat Transfer Systems", "count": 5 },
        { "name": "Metalworking Fluids", "count": 1 }
    ],
    "Refrigeration Systems": [
        { "name": "Refrigeration Compressors - Reciprocating", "count": 1 },
        { "name": "Refrigeration Compressors - Rotary Screw", "count": 1 },
        { "name": "Refrigeration Compressors - Centrifugal", "count": 1 }
    ],
    "Seal Oil Systems": [
        { "name": "Seal Oil Systems - General", "count": 1 },
        { "name": "Seal Oil Systems - Subsea", "count": 1 }
    ],
    "Subsea Equipment": [
        { "name": "Subsea Equipment - General", "count": 13 }
    ],
    "Transmissions": [
        { "name": "Transmissions - General", "count": 3 }
    ],
    "Turbine Oils": [
        { "name": "Turbine Oils - General", "count": 4 }
    ],
    "Turbines": [
        { "name": "Turbines - General", "count": 10 }
    ],
    "Workshops And Maintenance": [
        { "name": "Workshops And Maintenance - General", "count": 5 }
    ]
}

const applications: CategoryItem[] = [
    { name: 'Air Compressors - Reciprocating Crankcase', count: 6 },
    { name: 'Air Compressors - Rotary Screw', count: 3 },
    { name: 'Dewatering Protective', count: 1 },
    { name: 'Diesel Engines - Crankcase', count: 16 },
    { name: 'Gas Compressors - Reciprocating Cylinder', count: 8 },
    { name: 'Gas Engines', count: 2 },
    { name: 'Gas Engines - Crankcase', count: 3 },
    { name: 'Gearboxes', count: 3 },
    { name: 'Gearboxes - Splash', count: 4 },
    { name: 'Gearboxes - Extreme Heavy Duty', count: 4 },
    { name: 'Gearboxes - Heavy Duty', count: 8 },
    { name: 'Gearboxes - High Temp', count: 8 },
    { name: 'Gearboxes - Light Duty', count: 4 },
    { name: 'Gearboxes - Splash Bevel', count: 4 },
    { name: 'Gearboxes - Spur', count: 7 },
    { name: 'Gearboxes - Standard Duty', count: 7 },
    { name: 'Gearboxes - Worm', count: 6 },
    { name: 'Gears', count: 3 },
    { name: 'Grease Applications - Coupling', count: 2 },
    { name: 'Grease Applications - Electric Motor', count: 4 },
    { name: 'Grease Applications - Fifth Wheel', count: 4 },
    { name: 'Grease Applications - General Bearing', count: 15 },
    { name: 'Grease Applications - Heavy Duty Moly', count: 4 },
    { name: 'Grease Applications - High Temperature', count: 7 },
    { name: 'Grease Applications - Multi', count: 4 },
    { name: 'Grease Applications - Wire Rope', count: 4 },
    { name: 'Hydraulic Systems - Environmental Apps.', count: 1 },
    { name: 'Hydraulic Systems - HFC Environmental', count: 4 },
    { name: 'Hydraulic Systems - HFD Control Systems', count: 4 },
    { name: 'Hydraulic Systems - Mineral', count: 19 },
    { name: 'Hydraulic Systems - Speciality Applications', count: 8 },
    { name: 'Hydraulic Systems - Subsea BOP', count: 4 },
    { name: 'Open Gear', count: 4 },
    { name: 'Other', count: 16 },
    { name: 'Refrigeration Compressors - Crankcase (Freon & CO2)', count: 2 },
    { name: 'Refrigeration Compressors - Crankcase (HCFC)', count: 3 },
    { name: 'Refrigeration Compressors - Crankcase (NH3 & CO2)', count: 2 },
    { name: 'Refrigeration Compressors - General', count: 2 },
    { name: 'Seal Oil Systems - General Seal Oil Systems', count: 4 },
    { name: 'Seal Oil Systems - KV Seal Systems', count: 4 },
    { name: 'Stern Tube', count: 2 },
    { name: 'Subsea Equipment', count: 4 },
    { name: 'Subsea Equipment - Barrier Fluid', count: 4 },
    { name: 'Subsea Equipment - Closed Loop', count: 2 },
    { name: 'Subsea Equipment - Hydraulic Control', count: 7 },
    { name: 'Subsea Equipment - Total Loss', count: 8 },
    { name: 'Transmission - Off Pavement', count: 2 },
    { name: 'Turbine Oils', count: 10 },
    { name: 'Turbines', count: 2 },
    { name: 'Turbines - Flushing', count: 4 },
    { name: 'Turbines - Industrial Gas', count: 6 },
    { name: 'Workshops and Maintenance - Assembly', count: 2 },
    { name: 'Workshops and Maintenance - Chain Spray', count: 4 },
    { name: 'Workshops and Maintenance - Coolant & Line Flush', count: 4 },
]

interface HighlightMatchProps {
    text: string
    highlight: string
    className?: string
}

const HighlightMatch: React.FC<HighlightMatchProps> = ({ text, highlight, className }) => {
    if (!highlight) {
        return <span className={className}>{text}</span>
    }

    const regex = new RegExp(`(${highlight})`, 'gi')
    const parts = text.split(regex)

    return (
        <span className={className}>
            {parts.map((part, index) =>
                regex.test(part) ? (
                    <span key={index} className="sp-highlight">
                        {part}
                    </span>
                ) : (
                    part
                )
            )}
        </span>
    )
}

export default function SearchPopup({ isOpen, onClose }: SearchPopupProps) {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
    const [popoverContent, setPopoverContent] = useState<CategoryItem[]>([])
    const [openCategory, setOpenCategory] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState('') 
    
    const closeTimerRef = useRef<NodeJS.Timeout | null>(null)
    const POPOVER_CLOSE_DELAY = 300

    const handlePopoverOpen = useCallback(
        (event: React.MouseEvent<HTMLElement>, categoryName: string) => {
            if (closeTimerRef.current) {
                clearTimeout(closeTimerRef.current)
                closeTimerRef.current = null
            }

            if (openCategory === categoryName) {
                return
            }

            const content = subCategories[categoryName]

            if (content) {
                setAnchorEl(event.currentTarget)
                setPopoverContent(content)
                setOpenCategory(categoryName)
            } else {
                setAnchorEl(null)
                setPopoverContent([])
                setOpenCategory(null)
            }
        },
        [openCategory]
    )

    const handlePopoverClose = useCallback(() => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current)
        }
        
        closeTimerRef.current = setTimeout(() => {
            setAnchorEl(null)
            setOpenCategory(null)
            closeTimerRef.current = null
        }, POPOVER_CLOSE_DELAY)
    }, [])

    const handlePopoverEnter = useCallback(() => {
        if (closeTimerRef.current) {
            clearTimeout(closeTimerRef.current)
            closeTimerRef.current = null
        }
    }, [])

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
        setAnchorEl(null)
        setOpenCategory(null)
    }

    const filteredData = useMemo(() => {
        const term = searchTerm.trim().toLowerCase()
        if (!term) {
            return {
                filteredCategories: [],
                filteredApplications: [],
            }
        }

        const filterItems = (items: CategoryItem[]) => 
            items.filter(item => item.name.toLowerCase().includes(term))

        return {
            filteredCategories: filterItems(categories),
            filteredApplications: filterItems(applications),
        }
    }, [searchTerm])

    const { filteredCategories, filteredApplications } = filteredData

    const isSearching = searchTerm.trim().length > 0
    
    const SearchResults = () => (
        <div className="sp-search-results-columns">
            <div className="sp-search-column">
                <h3 className="sp-col-title">PRODUCT CATEGORIES</h3>
                <ul className="sp-list">
                    {filteredCategories.length > 0 ? (
                        filteredCategories.map((item, index) => (
                            <li key={index} className="sp-list-item">
                                <a href="#" className="sp-item-link">
                                    <HighlightMatch 
                                        text={item.name} 
                                        highlight={searchTerm} 
                                        className="sp-item-link-text"
                                    />
                                </a>
                                <span className="sp-item-count">
                                    {item.count} Product(s)
                                </span>
                            </li>
                        ))
                    ) : (
                        <li className="sp-no-match">No matched results</li>
                    )}
                </ul>
            </div>

            <div className="sp-search-column">
                <h3 className="sp-col-title">APPLICATIONS</h3>
                <ul className="sp-list">
                    {filteredApplications.length > 0 ? (
                        filteredApplications.map((item, index) => (
                            <li key={index} className="sp-list-item">
                                <a href="#" className="sp-item-link">
                                    <HighlightMatch 
                                        text={item.name} 
                                        highlight={searchTerm} 
                                        className="sp-item-link-text"
                                    />
                                </a>
                                <span className="sp-item-count">
                                    {item.count} Product(s)
                                </span>
                            </li>
                        ))
                    ) : (
                        <li className="sp-no-match">No matched results</li>
                    )}
                </ul>
            </div>
        </div>
    )
    
    const BrowseMode = () => (
        <>
            <div className="sp-divider-container">
                <div className="sp-line"></div>
                <span className="sp-divider-text">OR BROWSE</span>
                <div className="sp-line"></div>
            </div>

            <div className="sp-columns">
                <div className="sp-column">
                    <h3 className="sp-col-title">PRODUCT CATEGORIES</h3>
                    <ul className="sp-list">
                        {categories.map((item, index) => (
                            <li key={index} className="sp-list-item" 
                                onMouseEnter={(e) =>
                                    handlePopoverOpen(e, item.name)
                                }
                                onMouseLeave={handlePopoverClose}
                            >
                                <a
                                    href="#"
                                    className="sp-item-link"
                                >
                                    {item.name}
                                </a>
                                <span className="sp-item-count">
                                    {item.count} Product(s)
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="sp-column">
                    <h3 className="sp-col-title">APPLICATIONS</h3>
                    <ul className="sp-list">
                        {applications.map((item, index) => (
                            <li key={index} className="sp-list-item"
                                onMouseEnter={(e) => handlePopoverOpen(e, item.name)}
                                onMouseLeave={handlePopoverClose}
                            >
                                <a href="#" className="sp-item-link">
                                    {item.name}
                                </a>
                                <span className="sp-item-count">
                                    {item.count} Product(s)
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <CustomPopover
                    anchorEl={anchorEl}
                    onMouseEnter={handlePopoverEnter}
                    onMouseLeave={handlePopoverClose}
                >
                    {openCategory && (
                        <div className="sp-popover-header">
                            {openCategory}
                        </div>
                    )}
                    <ul className="sp-list sp-popover-list">
                        {popoverContent.map((item, index) => (
                            <li key={index} className="sp-list-item">
                                <a href="#" className="sp-item-link">
                                    {item.name}
                                    <span className="sp-popover-arrow">
                                        {'>'}
                                    </span>
                                </a>
                                <span className="sp-item-count">
                                    {item.count} Product(s)
                                </span>
                            </li>
                        ))}
                    </ul>
                </CustomPopover>
            </div>
        </>
    )
    
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            maxWidth="lg"
            fullWidth
            PaperProps={{ className: 'sp-dialog-paper' }}
        >
            <DialogContent>
                <div className="sp-header">
                    <p className="sp-help-text">
                        Can't find what you are looking for?{' '}
                        <a href="#" className="sp-link-action">
                            Let us know
                        </a>
                    </p>
                    <IconButton onClick={onClose} size="small">
                        <CloseIcon />
                    </IconButton>
                </div>

                <div className="sp-search-container">
                    <div className="sp-input-wrapper">
                        <input
                            type="text"
                            className="sp-input"
                            placeholder="Start typing..."
                            autoFocus
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <SearchIcon className="sp-search-icon" />
                    </div>
                    <p className="sp-search-hint">
                        Search by OEM, product name, product category or
                        application
                    </p>
                </div>
                {isSearching ? <SearchResults /> : <BrowseMode />}
            </DialogContent>
        </Dialog>
    )
}
