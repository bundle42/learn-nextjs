import { API_URL } from "../app/constants";
import potato from "../styles/movie-info.module.css";

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
        <a href={`/movies/${id}/credits`}>Credits &rarr;</a>
        <a href={`/movies/${id}/similar`}>Similar Movies &rarr;</a>
        <h3>Profit: ${movie.revenue - movie.budget}</h3>
        <h3>
          Genres: {movie.genres.map((genre: any) => genre.name).join(", ")}
        </h3>
        <img
          src={movie.production_companies?.[0]?.logo_path || "/fallback.png"}
          className={potato.company}
          alt={movie.title}
        />
      </div>
    </div>
  );
}
