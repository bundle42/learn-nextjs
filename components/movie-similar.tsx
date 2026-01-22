import { API_URL } from "../app/constants";
import styles from "../styles/movie-similar.module.css";

export async function getSimilar(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`, {
    cache: "force-cache",
  });
  return response.json();
}

export default async function SimilarInfo({ id }: { id: string }) {
  const similar = await getSimilar(id);
  return (
    <div className={styles.container}>
      {similar.map((movie: any) => (
        <a href={`/movies/${movie.id}`} key={movie.id} className={styles.card}>
          <img src={movie.poster_path} alt={movie.title} />
          <h3>{movie.title}</h3>
          <p className={styles.release}>{movie.release_date}</p>
          <p className={styles.rating}>★ {movie.vote_average.toFixed(1)}</p>
        </a>
      ))}
    </div>
  );
}
