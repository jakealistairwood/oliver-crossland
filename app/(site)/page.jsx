import Image from "next/image";
import { fetchHomepageData } from "@/sanity/sanity-api";
import Homepage from "@/pages/Homepage";

export default async function Home() {
  const data = await fetchHomepageData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Homepage data={data} />
    </main>
  );
}
