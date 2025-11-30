import Button from '@mui/material/Button'
import { useState } from 'react'
import { SearchPopup } from '../../components/SearchPopup'

export default function Home() {
    const [showPopup, setShowPopup] = useState(false)
    return (
        <>
            <p>THIS IS HOME PAGE</p>
            <Button variant="contained" onClick={() => setShowPopup(true)}>
                Hello world
            </Button>

            <SearchPopup
                isOpen={showPopup}
                onClose={() => setShowPopup(false)}
            />
        </>
    )
}
