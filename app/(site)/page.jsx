import Image from "next/image";
import { fetchHomepageData } from "@/sanity/sanity-api";
import Homepage from "@/pages/Homepage";

export default async function Home() {
  const data = await fetchHomepageData();
  return (
    <main className="">
        <Homepage data={data} />
    </main>
  );
}
