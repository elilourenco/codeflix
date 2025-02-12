import Header from "./components/Header";
import { MovieRow } from "./components/MovieRow";
import { Banner } from "./components/Banner";
import { getFeaturedMovies, getMoviesByGenre } from "./service/MovieService";

export default async function Home() {
  const featuredMovie= await getFeaturedMovies('106')
  const genres=['Dracma','Action', 'Comedy', 'Animation']


  const movies= await  Promise.all(
    genres.map(async(genre) => {
      const movies = await getMoviesByGenre(genre,{ _limit:8});
      return {sectionTitle:genre,movies}
    })
  );

  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-b lg:h-[140vh]">
      <Header />
      <main className="relative pb-24 pl-4 lg:pl-16">

        <Banner movie={featuredMovie}/>
        {movies.map((movie)=>(
          <MovieRow

          key={movie.sectionTitle}
          sectionTitle={movie.sectionTitle}
          movies={movie.movies}
          />
        ))

        }
        
      </main>
    </div>
    
  );
  
  
}
