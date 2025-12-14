// import React, { useState } from 'react'
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableContainer,
//     TableHead,
//     TableRow,
//     Checkbox,
//     Paper,
// } from '@mui/material'
// import CompareBar, { MAX_COMPARE_ITEMS } from '~/components/CompareBar'
// import productsData from '~/data/products.json'

// export default function ProductPage() {
//     const [selectedItems, setSelectedItems] = useState<
//         { id: number; name: string; [key: string]: any }[]
//     >([])

//     const items = productsData

//     const handleToggleSelect = (item: {
//         id: number
//         name: string
//         [key: string]: any
//     }) => {
//         setSelectedItems((prev) => {
//             const isSelected = prev.find((i) => i.id === item.id)

//             if (isSelected) {
//                 return prev.filter((i) => i.id !== item.id)
//             }

//             if (prev.length < MAX_COMPARE_ITEMS) {
//                 return [...prev, item]
//             }

//             return prev
//         })
//     }

//     const handleRemoveItem = (id: number | string) => {
//         setSelectedItems((prev) => prev.filter((i) => i.id !== id))
//     }

//     const handleCompare = () => {
//         console.log('Comparing items:', selectedItems)
//     }

//     const handleClear = () => setSelectedItems([])

//     return (
//         <div>
//             <h2 style={{ marginBottom: 20 }}>Products</h2>

//             <TableContainer component={Paper}>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Compare</TableCell>
//                             <TableCell>Product Name</TableCell>
//                             <TableCell>Category</TableCell>
//                             <TableCell>Application</TableCell>
//                         </TableRow>
//                     </TableHead>

//                     <TableBody>
//                         {items.map((item) => (
//                             <TableRow key={item.id}>
//                                 <TableCell>
//                                     <Checkbox
//                                         checked={selectedItems.some(
//                                             (i) => i.id === item.id
//                                         )}
//                                         onChange={() =>
//                                             handleToggleSelect(item)
//                                         }
//                                         sx={{
//                                             '&.Mui-checked': {
//                                                 color: 'green',
//                                             },
//                                         }}
//                                     />
//                                 </TableCell>

//                                 <TableCell>{item.name}</TableCell>
//                                 <TableCell>{item.category}</TableCell>
//                                 <TableCell>{item.application}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>

//             <CompareBar
//                 selectedItems={selectedItems}
//                 onCompare={handleCompare}
//                 onRemoveItem={handleRemoveItem}
//                 onClear={handleClear}
//             />
//         </div>
//     )
// }
