import { Inter } from "@next/font/google";
import LandingPage from "@/components/LandingPage";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  return (
    <>
      <LandingPage page={router.query.page} />
    </>
  );
}
