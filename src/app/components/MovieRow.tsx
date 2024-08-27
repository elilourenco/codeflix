import Image from "next/image";

type MovieRowProps ={
  sectionTitle:string;
}
type MovieCardprops={
  index:number
};

const MovieCard =({index}:MovieCardprops)=>(

  <div key={index} 
    className="group relative h-28 min-w-[200px] bg-gradient-to-t cursor-pointer rounded
     to-black from-transparent transition-transform duration-200 ease-out    hover:opacity-100
      md:h-36 md:min-w-[260px] lg:h-52 lg:min-w-[260px] md:hover:scale-100">
    <Image
      src={`/item_${index}.png`}
      fill={true}
      alt="MAID"
      className="rounded"
    >
    </Image>

  </div>
        
);

  


export function MovieRow({sectionTitle}:MovieRowProps) {
  return (
    <div className="flex-col space-y-4">
      <div className="flex">
        <h2 className="-ml-2 inline-flex items-center text-2xl font-bold">
          {sectionTitle}
        </h2>
        <div className="-ml-8 flex space-x-4 overflow-x-scroll p-6 scrollbar-hide">
          {[1, 2, 3, 4, 5, 5, 5].map((index) => (
            
            <MovieCard key={index} index={index} />
              
          ))}

        </div>

      </div>

    </div>

  );
}
