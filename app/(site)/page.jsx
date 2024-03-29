import React from "react";
import Image from "next/image";
import { fetchHomepageData, fetchPortolio } from "@/sanity/sanity-api";
import Homepage from "@/pages/Homepage";

export default async function Home() {
  const data = await fetchHomepageData();
  const portfolio = await fetchPortolio();
  return (
    <main className="">
        <Homepage data={data} portfolio={portfolio} />
    </main>
  );
}
