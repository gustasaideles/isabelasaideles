import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-1 flex max-w-5xl w-full items-center  text-cyan-600 justify-center font-bold text-3xl lg:flex">
        <h1 className="">Implantando</h1>
        <div className="mt-5 pt-2 loader"> </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl">
        <Image
          className="relative"
          src="/implant.gif"
          alt="implante dental"
          width={550}
          height={550}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0  ">
        <Footer/>
      </div>
    </main>
  );
}
