import Header from "./components/Header";
import { MovieRow } from "./components/MovieRow";
import { Banner } from "./components/Banner";

export default function Home() {
  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-b lg:h-[140vh]">
      <Header />
      <main className="relative pb-24 pl-4 lg:pl-16">

        <Banner/>
        <MovieRow sectionTitle="Trending Now"/>
        <MovieRow sectionTitle="Top Rated" />
        <MovieRow sectionTitle="Action Movies" />
        
      </main>
    </div>
    
  );
  
  
}
