import { IVehicleModelResponse, TVehicleMake } from "@/types";

const baseUrl =
  process.env.BASE_API_URL || "https://vpic.nhtsa.dot.gov/api/vehicles";

const handleResponse = async <T>(response: Response): Promise<T> => {
  if (!response.ok) {
    throw new Error(
      `API error: ${response.statusText} (Status: ${response.status})`
    );
  }

  const data = await response.json();
  return data.Results ?? [];
};

export const fetchVehicleMakes = async (): Promise<TVehicleMake[]> => {
  try {
    const response = await fetch(
      `${baseUrl}/GetMakesForVehicleType/car?format=json`
    );
    return await handleResponse<TVehicleMake[]>(response);
  } catch (error) {
    console.error("Failed to fetch vehicle makes:", error);
    return [];
  }
};

export const fetchVehicleModels = async (
  makeId: string,
  year: string
): Promise<IVehicleModelResponse[]> => {
  try {
    const response = await fetch(
      `${baseUrl}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    return await handleResponse<IVehicleModelResponse[]>(response);
  } catch (error) {
    console.error(
      `Failed to fetch vehicle models for makeId: ${makeId}, year: ${year}`,
      error
    );
    throw new Error("Unable to retrieve vehicle models.");
  }
};
