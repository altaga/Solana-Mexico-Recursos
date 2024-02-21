import "@/app/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import dynamic from "next/dynamic";
import { Kanit } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WalletComponent = dynamic(() => import("./walletComponent"), {
  ssr: false,
});

const inter = Kanit({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Solana Mexico NextJS",
  description: "Created by Altaga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ToastContainer />
          <WalletComponent>{children}</WalletComponent>
        </AppRouterCacheProvider>
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
