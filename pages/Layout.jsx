import Navbar from "@/components/Navbar";
import { Mail } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Head>
        <title>Saif Anees | Portfolio</title>
        <link rel="favicon" href="/saif.jpg" />
      </Head>
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
