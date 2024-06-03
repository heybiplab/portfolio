import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" relative bg-black-100 flex justify-center items-center flex-col overflow-hidden ms-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}