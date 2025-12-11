import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap",
  },
];

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import { GlobalStyles } from "@mui/material";
import TopBar from "./components/topbar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <GlobalStyles
          styles={{
            html: {
              margin: 0,
              padding: 0,
              width: "100%", // Ensure it's 100% of the viewport width
              height: "100%",
              // The next line ensures the HTML element itself has no padding
              boxSizing: "border-box",
            },
            body: {
              // 2. **AGRESSIVE RESET FOR BODY**
              margin: "0",
              padding: "0",
              minHeight: "100vh",
              width: "100%",
              // Set overflow-x hidden to explicitly prevent a scrollbar if something overflows
              overflowX: "hidden",
              // Inherit box-sizing from html
              boxSizing: "inherit",
            },
          }}
        />
        <TopBar />
        <ToastContainer theme="dark" position="top-center" />
        {children}
        <ScrollRestoration />
        <Scripts />
        <div
          style={{
            paddingLeft: "0",
            paddingRight: "0",
            width: "100%",
          }}
        >
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
