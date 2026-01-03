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
  return credits.map((person: any) => (
    <div className={styles.container} key={person.id}>
      <img src={person.profile_path} alt={person.name} />
      <h3>
        {person.name} as {person.character}
      </h3>
    </div>
  ));
}
