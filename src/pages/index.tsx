import Image from "next/image";
import { Inter } from "next/font/google";
import Menu from "@/components/Navbar";
import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <main
    //   className={`bg-white flex min-h-0  flex-col items-center justify-between p-24  ${inter.className} `}
    // >
    // </main>
    <main>
      <Navbar />
      <Content />
    </main>
  );
}
