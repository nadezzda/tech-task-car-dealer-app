'use client'
import { IVehicleModelResponse } from "@/types";
import React from "react";

interface VehicleModelsListProps {
  models: IVehicleModelResponse[];
}

const VehicleModelsList: React.FC<VehicleModelsListProps> = ({ models }) => {
  if (models.length === 0) {
    return <p className="text-gray-500">No models found for this selection.</p>;
  }
  const uniqueModels = Array.from(
    new Map(models.map((model) => [model.Model_ID, model])).values()
  );

  return (
    <ul className="w-full max-w-md bg-white rounded-lg shadow p-6">
      {uniqueModels.map((model) => (
        <li
          key={model.Model_ID}
          className="p-2 border-b border-gray-300 last:border-none"
        >
          {model.Model_Name}
        </li>
      ))}
    </ul>
  );
};

export default VehicleModelsList;
