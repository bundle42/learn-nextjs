import CreditsInfo, {
  getCredits,
} from "../../../../../components/movie-credits";
import { Suspense } from "react";

interface Iparams {
  params: Promise<{ id: string }>;
}

export default async function creditsPage({ params }: Iparams) {
  const { id } = await params; // await
  return (
    <div>
      <Suspense fallback={<h1>Loading movie credits</h1>}>
        {<CreditsInfo id={id} />}
      </Suspense>
    </div>
  );
}
