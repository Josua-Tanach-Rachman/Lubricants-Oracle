import React, { useMemo } from 'react'
import { Dialog, Box, ThemeProvider } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import PrintIcon from '@mui/icons-material/Print'
import { theme } from '~/Theme'

type CompareItem = {
    id: number | string
    name: string
    [key: string]: any
}

type CompareModalProps = {
    open: boolean
    items: CompareItem[]
    onClose: () => void
}

export default function CompareModal({
    open,
    items,
    onClose,
}: CompareModalProps) {
    // 1. Logic ambil keys
    const comparisonKeys = useMemo(() => {
        if (!items || items.length === 0) return []
        const keys = new Set<string>()
        items.forEach((item) => {
            Object.keys(item).forEach((k) => {
                if (k !== 'id' && k !== 'name') keys.add(k)
            })
        })
        return Array.from(keys)
    }, [items])

    if (!items || items.length === 0) return null

    const colWidth = `${80 / items.length}%`

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                open={open}
                onClose={onClose}
                maxWidth="lg"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 2,
                        overflow: 'hidden',
                    },
                }}
            >
                {/* HEADER */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 3,
                        borderBottom: '1px solid #eee',
                    }}
                >
                    <h1
                        style={{
                            margin: 0,
                            fontSize: '24px',
                            fontWeight: 800,
                            color: '#333',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                        }}
                    >
                        Product Comparison
                    </h1>

                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <button
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#2e7d32',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontSize: '14px',
                            }}
                        >
                            <DownloadIcon sx={{ fontSize: '20px' }} />
                            Download
                        </button>
                        <button
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: '#2e7d32',
                                fontWeight: 600,
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontSize: '14px',
                            }}
                        >
                            <PrintIcon sx={{ fontSize: '20px' }} />
                            Print
                        </button>
                        <button
                            onClick={onClose}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '28px',
                                color: '#999',
                                lineHeight: 0.5,
                                marginLeft: '8px',
                            }}
                        >
                            &times;
                        </button>
                    </Box>
                </Box>

                {/* CONTENT TABLE */}
                <Box
                    sx={{
                        p: 0,
                        overflowX: 'auto',
                        maxHeight: '70vh',
                        overflowY: 'auto',
                    }}
                >
                    <table
                        style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            minWidth: '600px',
                            fontSize: '14px',
                        }}
                    >
                        <thead>
                            <tr style={{ borderBottom: '2px solid #ddd' }}>
                                <th
                                    style={{
                                        padding: '16px',
                                        textAlign: 'left',
                                        width: '20%',
                                        backgroundColor: '#f5f5f5',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        fontSize: '12px',
                                        letterSpacing: '0.5px',
                                        color: '#333',
                                        position: 'sticky',
                                        top: 0,
                                        zIndex: 10,
                                    }}
                                >
                                    Specification
                                </th>
                                {items.map((item) => (
                                    <th
                                        key={item.id}
                                        style={{
                                            padding: '16px',
                                            textAlign: 'center',
                                            width: colWidth,
                                            fontWeight: 700,
                                            color: '#2e7d32',
                                            borderLeft: '1px solid #eee',
                                            position: 'sticky',
                                            top: 0,
                                            backgroundColor: 'white',
                                            zIndex: 10,
                                        }}
                                    >
                                        {item.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonKeys.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan={items.length + 1}
                                        style={{
                                            padding: '24px',
                                            textAlign: 'center',
                                            color: '#999',
                                        }}
                                    >
                                        No comparison data available
                                    </td>
                                </tr>
                            ) : (
                                comparisonKeys.map((key) => (
                                    <tr
                                        key={key}
                                        style={{
                                            borderBottom: '1px solid #eee',
                                        }}
                                    >
                                        <td
                                            style={{
                                                padding: '14px 16px',
                                                fontWeight: 600,
                                                color: '#333',
                                                backgroundColor: '#fafafa',
                                                verticalAlign: 'top',
                                                textTransform: 'capitalize',
                                            }}
                                        >
                                            {key
                                                .replace(/([A-Z])/g, ' $1')
                                                .replace(/_/g, ' ')
                                                .trim()}
                                        </td>
                                        {items.map((item) => (
                                            <td
                                                key={`${item.id}-${key}`}
                                                style={{
                                                    padding: '14px 16px',
                                                    textAlign: 'center',
                                                    color: '#666',
                                                    borderLeft:
                                                        '1px solid #eee',
                                                    verticalAlign: 'top',
                                                }}
                                            >
                                                {formatValue(item[key])}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </Box>
            </Dialog>
        </ThemeProvider>
    )
}

function formatValue(value: any): string {
    if (value === null || value === undefined) return 'N/A'
    if (typeof value === 'boolean') return value ? 'Yes' : 'No'
    if (typeof value === 'object') return JSON.stringify(value)
    return String(value)
}
