import { Metadata } from "next";
import VehicleModelsList from "@/components/vehicle-models-list/vehicle-models-list";
import { fetchVehicleModels, fetchVehicleMakes } from "@/lib/data";
import VehicleModelsListSkeleton from "@/components/skeleton/vihicle-models-list-skeleton";
import { Suspense } from "react";
import { TVehicleMake } from "@/types";

export async function generateStaticParams() {
  const makes = await fetchVehicleMakes();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) =>
    (2015 + i).toString()
  );

  const paths = makes.flatMap((make: TVehicleMake) =>
    years.map((year) => ({
      makeId: make.MakeId.toString(),
      year,
    }))
  );

  return paths;
}

export async function generateMetadata({
  params,
}: ResultPageProps): Promise<Metadata> {
  const { makeId, year } = await params;
  const selectedMake = await getSelectedMake(makeId);

  if (!selectedMake) {
    return { title: "Vehicle Models Results" };
  }

  return {
    title: `Vehicle Models for ${selectedMake.MakeName} (${year})`,
    description: `Explore vehicle models for ${selectedMake.MakeName} in ${year}.`,
  };
}

interface ResultPageProps {
  params: {
    makeId: string;
    year: string;
  };
}

async function getSelectedMake(makeId: string) {
  const makes = await fetchVehicleMakes();
  return makes.find((make) => make.MakeId.toString() === makeId);
}

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
    <h1 className="text-2xl font-bold mb-6">Error</h1>
    <p className="text-red-500">{message}</p>
  </div>
);

const ResultPage: React.FC<ResultPageProps> = async ({ params }) => {
  const { makeId, year } = await params;

  const selectedMake = await getSelectedMake(makeId);

  if (!selectedMake) {
    return <ErrorMessage message="Make not found for the given ID." />;
  }

  const models = await fetchVehicleModels(makeId, year);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col p-4 items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Vehicle Models</h1>
      <p className="text-gray-700 mb-4">
        Selected Make: <strong>{selectedMake.MakeName}</strong>, Year:{" "}
        <strong>{year}</strong>
      </p>

      <Suspense fallback={<VehicleModelsListSkeleton />}>
        <VehicleModelsList models={models} />
      </Suspense>
    </div>
  );
};

export default ResultPage;
