import { NavbarProvider } from "@/context/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <NavbarProvider>
      <Component {...pageProps} />
    </NavbarProvider>
  );
}
