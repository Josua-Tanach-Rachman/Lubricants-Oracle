// src/components/SearchModal.tsx
import React from 'react';
import {
  Modal,
  Box,
  Typography,
  Link,
  Grid,
  IconButton,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ open, onClose }) => {
  // Mock data - replace with real API/data later
  const productCategories = [
    { name: 'Compressors', count: 18 },
    { name: 'Engine Oils', count: 23 },
    { name: 'Environmentally Responsible', count: 1 },
    { name: 'Gear Oils', count: 33 },
    { name: 'Grease Applications', count: 14 },
    { name: 'Hydraulics', count: 31 },
    { name: 'Other', count: 18 },
  ];

  const applications = [
    { name: 'Air Compressors - Reciprocating Crankcase', count: 7 },
    { name: 'Air Compressors - Rotary Screw', count: 3 },
    { name: 'Dewatering Protective', count: 1 },
    { name: 'Diesel Engines - Cooling System', count: 2 },
    { name: 'Diesel Engines - Crankcase', count: 16 },
    { name: 'Gas Compressors - Reciprocating Cylinder', count: 8 },
    { name: 'Gas Engine', count: 2 },
  ];

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: '1000px',
          maxHeight: '90vh',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 0,
          overflowY: 'auto',
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" fontWeight="bold">
            Start typing...
          </Typography>
          <IconButton onClick={onClose} sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Subtitle */}
        <Typography variant="body1" color="text.secondary" mb={3}>
          Search by OEM, product name, product category or application
        </Typography>

        {/* Divider */}
        <Divider sx={{ my: 3 }} />

        {/* OR BROWSE Section */}
        <Typography variant="h6" fontWeight="bold" align="center" mb={2}>
          OR BROWSE
        </Typography>

        {/* Content Grid */}
        <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6 }}>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                PRODUCT CATEGORIES
                </Typography>

                {productCategories.map((cat, index) => (
                <div key={index}>
                    <Link
                    component="button"
                    variant="body2"
                    color="success.main"
                    underline="none"
                    sx={{ display: "block", mb: 1 }}
                    onClick={() => console.log("Category clicked:", cat.name)}
                    >
                    {cat.name}
                    </Link>

                    <Typography variant="caption" color="text.secondary" ml={1}>
                    {cat.count} Product(s)
                    </Typography>
                </div>
                ))}
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                APPLICATIONS
                </Typography>

                {applications.map((app, index) => (
                <div key={index}>
                    <Link
                    component="button"
                    variant="body2"
                    color="success.main"
                    underline="none"
                    sx={{ display: "block", mb: 1 }}
                    onClick={() => console.log("Application clicked:", app.name)}
                    >
                    {app.name}
                    </Link>

                    <Typography variant="caption" color="text.secondary" ml={1}>
                    {app.count} Product(s)
                    </Typography>
                </div>
                ))}
            </Grid>
        </Grid>



        {/* Footer */}
        <Box sx={{ mt: 4, textAlign: 'right' }}>
          <Typography variant="body2" color="text.secondary">
            Can’t find what you are looking for?{' '}
            <Link
              component="button"
              color="success.main"
              underline="hover"
              onClick={() => alert('Contact form would open here')}
            >
              Let us know
            </Link>
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default SearchModal;