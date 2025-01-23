import FilterForm from "@/components/filter-form/filter-form";
import FilterFormSkeleton from "@/components/skeleton/filter-form-skeleton";
import { fetchVehicleMakes } from "@/lib/data";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Car Dealer App",
  description: "Select vehicle make and model year",
};

async function FilterFormWithData() {
  const makes = await fetchVehicleMakes();
  return <FilterForm makes={makes} />;
}

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-6">Car Dealer App</h1>
        <Suspense fallback={<FilterFormSkeleton />}>
          <FilterFormWithData />
        </Suspense>
      </div>
    </main>
  );
}
