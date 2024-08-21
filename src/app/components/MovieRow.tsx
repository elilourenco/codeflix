import Image from "next/image";

type MovieRowProps ={
  sectionTitle:string;
}
type MovieCardprops={
  index:number
};

const MovieCard =({index}:MovieCardprops)=>(

  <div key={index} 
    className="group relative h-28 min-w-[200px]  transform bg-gradient-to-t
      cursor-pointer rounded
     to-black
      from-transparent
      transition duration-200 ease-in  hover:scale-110 hover:z-50
      md:h-40 md:min-w-[300px] lg:h-52 lg:min-w-[400px]">
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
