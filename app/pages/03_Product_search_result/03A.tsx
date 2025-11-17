import React from "react";
import "./03A.css";
import CheckboxLabels from "../../components/Checkbox_label";
import BreadCrumbs from "../../components/breadcrumbs";
import MuiBreadcrumbs from "../../components/MuiBreadcrumbs";
import MuiTypography  from "~/components/MuiTypography";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { colors } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#139343',
    },
    secondary: {
      main: '#139343',
    },
  },
  typography: {
  fontFamily: '"Roboto Condensed", sans-serif',
  h1: { fontWeight: 700 },
  h2: { fontWeight: 700 },
  subtitle1: { fontWeight: 400 },
  body1: { fontSize: '14px' },
  },
});



export default function SearchPage() {
  return (
    
    <div className="page-container">
      
      <ThemeProvider theme={theme}>
        <div className="top_bar">
            <h1>TOP BAR GOES HERE</h1>
        </div>
        <div className="search-page">

        {/* Breadcrumb */}
        <div className="breadcrumb-container">
          <BreadCrumbs />
          <MuiBreadcrumbs />
        </div>

        {/* Main Layout */}
        <div className="layout">
          {/* LEFT FILTER SIDEBAR */}
          <aside className="sidebar">
            <h3 className="sidebar-title">FILTERS</h3>

            <details>
              <summary>FAMILY</summary>
            </details>

            <details>
              <summary>RANGE</summary>
            </details>

            <details>
              <summary>PRODUCT CATEGORY</summary>
            </details>

            <details>
              <summary>APPLICATION</summary>
            </details>

            <details>
              <summary>VISCOSITY</summary>
            </details>
          </aside>

          {/* RIGHT CONTENT */}
          <main className="content">
            {/* Title Section */}
            <h1 className="results-title">SEARCH RESULTS</h1>
            <p className="results-sub">
              Listing <span className="highlight">250</span> products matching <span className="highlight">"AI"</span>
            </p>

            {/* Tabs Section */}
            <div className="tabs">
              <button className="tab active">COUNTRY</button>
              <button className="tab">PORT</button>
              <button className="tab">FAMILY</button>
              <button className="tab">RANGE</button>
              <button className="tab">PRODUCT</button>
            </div>

            {/* Results */}
            <div className="result-card">
              <div className="result-header">
                <span className="country-name">ALGERIA</span>
                <span className="badge">COUNTRY</span>
              </div>

              <p className="desc">
                Short description lorem ipsum dolor sit amet
              </p>

              <div className="action-links">
                <a href="#">SHOW PORT (4)</a>
                <a href="#">SHOW PRODUCTS (100)</a>
              </div>
            </div>

            <div className="result-card">
              <div className="result-header">
                <span className="country-name">ALBENIA</span>
                <span className="badge">COUNTRY</span>
              </div>

              <p className="desc">
                Short description lorem ipsum dolor sit amet
              </p>

              <div className="action-links">
                <a href="#">SHOW PORT (4)</a>
                <a href="#">SHOW PRODUCTS (100)</a>
              </div>
            </div>
          </main>
        </div>
      </div>
        <div className="footer">
          <h1>FOOTER GOES</h1>
        </div>
        
        
        </ThemeProvider>
    </div>
  );
}
