import React from "react";
import { fetchPortfolioData, fetchPortolio } from "@/sanity/sanity-api";
import Page from "@/layouts/Page";

export default async function Portfolio() {
  const data = await fetchPortfolioData();
  const portfolio = await fetchPortolio();
  return (
    <main className="">
        <Page data={data} portfolio={portfolio} />
    </main>
  );
}
