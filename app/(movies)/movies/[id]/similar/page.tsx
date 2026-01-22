import { Suspense } from "react";
import SimilarInfo from "../../../../../components/movie-similar";

interface Iparams {
  params: Promise<{ id: string }>;
}

export default async function SimilarPage({ params }: Iparams) {
  const { id } = await params; // await
  return (
    <div>
      <Suspense fallback={<h1>Loading movie similar</h1>}>
        {<SimilarInfo id={id} />}
      </Suspense>
    </div>
  );
}
