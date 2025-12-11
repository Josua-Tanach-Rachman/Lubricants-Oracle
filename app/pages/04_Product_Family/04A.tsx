import React from "react";
import "./04A.css";
import CheckboxLabels from "../../components/Checkbox_label";
import BreadCrumbs from "../../components/breadcrumbs";
import MuiBreadcrumbs from "../../components/MuiBreadcrumbs";
import MuiTypography from "~/components/MuiTypography";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { colors } from "@mui/material";
import TopBar from "~/components/topbar";
import { theme } from "~/Theme";
import FilterSidebar from "~/components/Filtersidebar";
import ColouredTabs from "~/components/Colouredtabs";
// import Footer from "~/components/Footer";
import SearchBar from "~/components/SearchBar";

export default function ProductFamilyPage() {
  const [showPgProducts, setShowPgProducts] = React.useState(false);
  const [showRange2Products, setShowRange2Products] = React.useState(false);
  const [showFamilyProducts, setShowFamilyProducts] = React.useState(true); // default kebuka seperti screenshot

  const ProductsTable = () => (
    <div className="products-table-wrapper">
      <table className="products-table">
        <thead>
          <tr>
            <th className="compare-column">COMPARE</th>
            <th>PRODUCT NAME</th>
            <th>CATEGORY</th>
            <th>APPLICATION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <a href="#" className="product-link">
                Alphasy n HG 220
              </a>
            </td>
            <td>Gear Oils</td>
            <td>Gearboxes</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <a href="#" className="product-link">
                Alphasy n HG 230
              </a>
            </td>
            <td>Gear Oils</td>
            <td>Gearboxes</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <a href="#" className="product-link">
                Alphasy n Product Name
              </a>
            </td>
            <td>Gear Oils</td>
            <td>Gearboxes</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              <a href="#" className="product-link">
                Alphasy n Product Name
              </a>
            </td>
            <td>Gear Oils</td>
            <td>Gearboxes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="page-container">
      <ThemeProvider theme={theme}>
        {/* TOP BAR */}
        <div className="top_bar">
          <TopBar />
        </div>

        <div className="search-page">
          {/* BREADCRUMB + SEARCH BAR */}
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
              <h1 className="results-title">ALPHASYN FAMILY</h1>
              <p className="results-sub family-intro">
                Synthetic gear oils for gear boxes, bearings, circulating
                systems and hydraulic systems. The Alphasy n family has product
                variants suitable for extreme pressure / high load operations
                and wide temperature ranges.
              </p>

              <button className="contact-button" type="button">
                CONTACT US
              </button>

              <p className="results-sub helper-text">
                Expand the items below to select and compare up to 4 products.
              </p>

              <section className="range-list">
                {/* CARD 1 - ALPHASYN PG */}
                <article className="result-card">
                  <div className="result-header">
                    <div>
                      <div className="product-card-name-container">
                        <div className="country-name">ALPHASYN PG</div>
                        <span className="badge badge-range">RANGE</span>
                      </div>
                      
                      <div className="range-subtitle">
                        SYNTHETIC INDUSTRIAL EP GEAR OIL
                      </div>
                    </div>
                    
                  </div>

                  <p className="desc">
                    Polyalkyleneglycol (PAG) based lubricants suitable for
                    medium to highly loaded worm and spur gear units and
                    bearing and circulating systems.
                  </p>

                  <div className="action-links">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowPgProducts((prev) => !prev);
                      }}
                    >
                      {showPgProducts
                        ? "HIDE PRODUCTS (4)"
                        : "SHOW PRODUCTS (4)"}
                    </a>
                    <a href="#">SEE RANGE DETAILS</a>
                  </div>

                  {showPgProducts && <ProductsTable />}
                </article>

                {/* CARD 2 - RANGE NAME 2 */}
                <article className="result-card">
                  <div className="result-header">
                    <div>
                        
                        <div className="product-card-name-container">
                            <div className="country-name">ALPHASYN RANGE NAME 2</div>
                            <span className="badge">RANGE</span>
                        </div>
                      
                      <div className="range-subtitle">
                        SYNTHETIC INDUSTRIAL EP GEAR OIL
                      </div>
                    </div>
                    
                  </div>

                  <p className="desc">
                    Polyalkyleneglycol (PAG) based lubricants suitable for
                    medium to highly loaded worm and spur gear units and
                    bearing and circulating systems.
                  </p>

                  <div className="action-links">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowRange2Products((prev) => !prev);
                      }}
                    >
                      {showRange2Products
                        ? "HIDE PRODUCTS (4)"
                        : "SHOW PRODUCTS (4)"}
                    </a>
                    <a href="#">SEE RANGE DETAILS</a>
                  </div>

                  {showRange2Products && <ProductsTable />}
                </article>

                {/* CARD 3 - ALPHASYN PRODUCTS */}
                <article className="result-card">
                  <div className="result-header">
                    <div>
                        
                        <div className="product-card-name-container">
                            <div className="country-name">ALPHASYN</div>
                            <span className="badge">PRODUCTS</span>
                        </div>
                      
                      <div className="range-subtitle">
                        SYNTHETIC INDUSTRIAL EP GEAR OIL
                      </div>
                    </div>
                    
                  </div>

                  <p className="desc">
                    Synthetic gear oils for use in gear boxes (including worm
                    and spur gear units), bearings, circulating systems and
                    hydraulic systems. Family includes formulations suitable for
                    extreme pressure / high load operations, high temperatures
                    and over a wide range of temperatures.
                  </p>

                  <div className="action-links">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowFamilyProducts((prev) => !prev);
                      }}
                    >
                      {showFamilyProducts
                        ? "HIDE PRODUCTS (4)"
                        : "SHOW PRODUCTS (4)"}
                    </a>
                  </div>

                  {showFamilyProducts && <ProductsTable />}
                </article>
              </section>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}
