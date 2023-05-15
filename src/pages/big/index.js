import { Inter } from "next/font/google";
import Big from "@/components/Big";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Big />
    </>
  );
}
