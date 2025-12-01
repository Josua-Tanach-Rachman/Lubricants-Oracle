import React from "react";
import "./03A.css";
import CheckboxLabels from "../../components/Checkbox_label";
import BreadCrumbs from "../../components/breadcrumbs";
import MuiBreadcrumbs from "../../components/MuiBreadcrumbs";
import MuiTypography  from "~/components/MuiTypography";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { colors } from "@mui/material";
import TopBar from "~/components/topbar";
import { theme } from "~/Theme";   // <-- import the theme
import FilterSidebar from "~/components/Filtersidebar";
import ColouredTabs from "~/components/Colouredtabs";
// import Footer from "~/components/Footer";
import SearchBar from "~/components/SearchBar";
import ProductTable from "~/components/ProductTable";




export default function SearchPage() {
  const [tabValue, setTabValue] = React.useState(0);
  return (
    
    <div className="page-container">
      
      <ThemeProvider theme={theme}>
        <div className="top_bar">
            <TopBar />
        </div>
        <div className="search-page">

        {/* Breadcrumb */}
        <div className="breadcrumb-container">
          
          <MuiBreadcrumbs />
          <SearchBar />
        </div>

        {/* Main Layout */}
        <div className="layout">
          {/* LEFT FILTER SIDEBAR */}
          <aside className="sidebar">
            <FilterSidebar />
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
              <ColouredTabs
                value={tabValue}
                onChange={(e, newValue) => setTabValue(newValue)}
              />
            </div>

            {/* Results */}

            {/* COUNTRY TABS */}
            {tabValue === 0 && (
              <>
              <div className="result-card">
                <div className="result-header">
                  <span className="country-name">ALGERIA</span>
                  <span className="badge">COUNTRY</span>
                </div>
            
                <p className="desc">
                  Short description lorem ipsum dolor sit amet
                </p>

                <div className="action-links">
                
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
                  
                  <a href="#">SHOW PRODUCTS (100)</a>
                </div>
              </div>
              </>
            )}

            {/* PORT TABS */}
            {tabValue === 1 && (
              <>
              <div className="result-card">
                <div className="result-header">
                  <span className="country-name">PORT ALFRED</span>
                  <span className="badge">PORT</span>
                </div>
                <p className="Port-Name">
                  CANADA
                </p>
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
                  <span className="country-name">PORT ALFRED</span>
                  <span className="badge">PORT</span>
                </div>
                <p className="Port-Name">
                  CANADA
                </p>
                <p className="desc">
                  Short description lorem ipsum dolor sit amet
                </p>

                <div className="action-links">
                  <a href="#">SHOW PORT (4)</a>
                  <a href="#">SHOW PRODUCTS (100)</a>
                </div>
              </div>
              </>
            )}

            
            {/* FAMILY TABS */}
            {tabValue === 2 && (
              <>
              <div className="result-card">
                <div className="result-header">
                  <span className="country-name">ALPHA</span>
                  <span className="badge">FAMILY</span>
                </div>
                
                <p className="desc">
                  Short description lorem ipsum dolor sit amet
                </p>

                <div className="action-links">
                  <a href="#">SHOW RANGE (4)</a>
                  <a href="#">SHOW PRODUCTS (100)</a>
                </div>
              </div>

              <div className="result-card">
                <div className="result-header">
                  <span className="country-name">ALPHA</span>
                  <span className="badge">FAMILY</span>
                </div>
                
                <p className="desc">
                  Short description lorem ipsum dolor sit amet
                </p>

                <div className="action-links">
                  <a href="#">SHOW RANGE(4)</a>
                  <a href="#">SHOW PRODUCTS (100)</a>
                </div>
              </div>
              </>
            )}

             {/* RANGE TABS */}
            {tabValue === 3 && (
              <>
              <div className="result-card">
                <div className="result-header">
                  <span className="country-name">ALPHA</span>
                  <span className="badge">RANGE </span>
                </div>
                
                <p className="desc">
                  Short description lorem ipsum dolor sit amet
                </p>

                <div className="action-links">
            
                  <a href="#">SHOW PRODUCTS (100)</a>
                </div>
              </div>

              <div className="result-card">
                <div className="result-header">
                  <span className="country-name">ALPHA</span>
                  <span className="badge">RANGE </span>
                </div>
                
                <p className="desc">
                  Short description lorem ipsum dolor sit amet
                </p>

                <div className="action-links">
                  
                  <a href="#">SHOW PRODUCTS (100)</a>
                </div>
              </div>
              </>
            )}

            {/* PRODUCT TABS */}
            {tabValue === 4 && (
              <>
                <ProductTable />
              </>
            )}
          </main>
        </div>
      </div>

      
        
        
        
        </ThemeProvider>
    </div>
  );
}
