import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs 
        aria-label="breadcrumb"
        separator=">"
        sx={{
          fontFamily: '"Roboto Condensed", sans-serif',
          fontSize: '10px', // Set base font size here
          fontWeight: 'regular',
          '& .MuiBreadcrumbs-ol': {
            flexWrap: 'nowrap',
          },
          '& .MuiBreadcrumbs-li': {
            fontFamily: 'inherit',
            fontSize: 'inherit', // This makes children inherit
            fontWeight: 'inherit',
          },
          '& .MuiBreadcrumbs-separator': {
            marginLeft: '4px',
            marginRight: '4px',
            color: '#DDDDDD',
            fontSize: '14px', // Separator also inherits
          }
        }}
      >
        {/* Previous pages - Green color */}
        <Link 
          underline="hover" 
          sx={{
            color: '#139343', // Only color specific styles
            '&:hover': {
              color: '#0d6b2f',
            }
          }}
          href="/"
        >
          HOME
        </Link>
        
        {/* Previous pages - Green color */}
        <Link
          underline="hover"
          sx={{
            color: '#139343', // Only color specific styles
            '&:hover': {
              color: '#0d6b2f',
            }
          }}
          href="/material-ui/getting-started/installation/"
        >
          ALPHA
        </Link>
        
        {/* Current page - Black color */}
        <Typography
          sx={{
            color: 'black', // Only color specific style
            fontSize: 'inherit', // Add this to inherit font size
            fontFamily: 'inherit', // Add this to inherit font family
            fontWeight: 'inherit', // Add this to inherit font weight
          }}
        >
          ALPHA SP
        </Typography>
      </Breadcrumbs>
    </div>
  );
}