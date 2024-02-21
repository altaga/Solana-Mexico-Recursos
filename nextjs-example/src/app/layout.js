import "@/app/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import dynamic from "next/dynamic";
import { Kanit } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Add Fonts to NextJS Project

const inter = Kanit({ weight: "400", subsets: ["latin"] });

// Add Metadata like Title, Description to Site

export const metadata = {
  title: "Solana Mexico NextJS",
  description: "Created by Altaga",
};

// Disable Render Side Rendering for WalletComponent to avoid hydration error
const WalletComponent = dynamic(() => import("../utils/walletComponent"), {
  ssr: false,
});

// layout is the root of the NextJS App, it's the parent of all pages

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {
          // App Router Cache Provider, Toast Container and Wallet Component will be available on all pages
        }
        {
          // App Router Cache Provider provides compatibility with Material-UI module
        }
        <AppRouterCacheProvider>
          {
            // Toast Container provides Toast notifications on all pages
          }
          <ToastContainer />
          {
            // Wallet Component is a container for the Solana Wallet Adapter, then you can use it on all pages
          }
          <WalletComponent>
            {
              // Children in this case is the content of the rendered page
            }
            {children}
          </WalletComponent>
        </AppRouterCacheProvider>
        {
          // This footer appears on all pages
        }
        <div
          style={{
            position: "absolute",
            bottom: "2vh",
            width: "96vw",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              color: "#ffffffaa",
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "1rem",
              fontSize: "1.3rem",
            }}
          >
            This dapp aims to show how to use
            <br />
            the Solana Wallet Adapter in NextJS.
          </h2>
        </div>
      </body>
    </html>
  );
}
