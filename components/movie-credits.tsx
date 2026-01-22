import { API_URL } from "../app/constants";
import styles from "../styles/movie-credits.module.css";

export async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`, {
    cache: "force-cache",
  });
  return response.json();
}

export default async function CreditsInfo({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      {credits.map((person: any) => (
        <div className={styles.card} key={person.id}>
          <img src={person.profile_path} alt={person.name} />
          <h3>{person.name}</h3>
          <p className={styles.character}>as {person.character}</p>
          <p className={styles.department}>
            Department: {person.known_for_department}
          </p>
          <p className={styles.popularity}>
            Popularity: {person.popularity.toFixed(1)}
          </p>
        </div>
      ))}
    </div>
  );
}
