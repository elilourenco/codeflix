import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-b lg:h-[140vh]">
      <Header />
      <main className="relative pb-24 pl-4  lg:pl-16">

        <div className=" flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
          <div className=" absolute flex flex-col left-0 top-0 -z-10 h-[95vh] w-screen bg-black">

          <Image
            src="/banner.png"
            alt=" the witcher"
            fill={true}
            className="object-cover  h-[65vh] lg:h-[95vh]:"
            />
          </div>
              <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
              The Witcher
            </h1>
            <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
                Geralt of Rivia, a solitary monster hunter , struggles to find his
                place in a world where people often prove more wicked then beats.

            </p>
        </div>
        <div className="flex space-x-3">

        <button className="
         md:text-xl
         flex
         cursor-pointer
         items-center
         gap-x-2
         rounded
         bg-white
         text-sm
         px-5 py-1.5
         font-semibold
         text-black 
         transition hover:opacity-75 
         md:px-8
         md:py-2.5
         ">
          Play
        </button>

        <button className="
        md:text-xl
        flex
        cursor-pointer
        items-center
        gap-x-2
        rounded
        bg-gray-600
        text-sm
        px-5 py-1.5
         font-semibold
        text-black 
        transition hover:opacity-75 
        md:px-8
        md:py-2.5">
          More info
        </button>

        </div>
       
        
        
      </main>
    </div>
    
  );
}
