import { Inter } from "next/font/google";
import { useGrowthBook } from "@growthbook/growthbook-react";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const growthbook = useGrowthBook();

  useEffect(() => {
    console.log("not ready", growthbook?.getAllResults());
    if (!growthbook?.ready) return;
    console.log("ready", growthbook?.getAllResults());
  }, [growthbook?.ready]);

  return (
    <div>
      {!growthbook?.ready && (
        <div className="w-full h-full bg-slate-900 fixed z-20"></div>
      )}
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Landing&nbsp;
            <code className="font-mono font-bold">pages/index.tsx</code>
          </p>
        </div>
      </main>
    </div>
  );
}
