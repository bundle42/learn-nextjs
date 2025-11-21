import potato from "../styles/movie-info.module.css";
import { API_URL } from "../app/(home)/page";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`, { cache: "force-cache" });
  return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={potato.container}>
      <img
        src={movie.poster_path}
        className={potato.poster}
        alt={movie.title}
      />
      <div className={potato.info}>
        <h1 className={potato.title}>{movie.title}</h1>
        <h3>★{movie.vote_average.toFixed(2)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">
          Homepage &rarr;
        </a>
        <h3>Profit: ${movie.revenue - movie.budget}</h3>
        <img
          src={movie.production_companies[0].logo_path}
          className={potato.company}
          alt={movie.title}
        />
      </div>
    </div>
  );
}
