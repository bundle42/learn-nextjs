import { API_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";

export async function getSimilar(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`, {
    cache: "force-cache",
  });
  return response.json();
}

export default async function SimilarInfo({ id }: { id: string }) {
  const similar = await getSimilar(id);
  return similar.map((movie: any) => (
    <div className={styles.container} key={movie.id}>
      <img src={movie.backdrop_path} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  ));
}
