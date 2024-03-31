import React from "react";
import Image from "next/image";
import { fetchPortfolioData, fetchPortolio } from "@/sanity/sanity-api";
import Homepage from "@/pages/Homepage";
import Page from "@/layouts/Page";

export default async function Home() {
  const data = await fetchPortfolioData();
  const portfolio = await fetchPortolio();
  return (
    <main className="">
        {/* <Homepage data={data} portfolio={portfolio} /> */}
        <Page data={data} portfolio={portfolio} />
    </main>
  );
}
