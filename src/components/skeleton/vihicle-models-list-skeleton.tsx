const VehicleModelsListSkeleton: React.FC = () => {
  return (
    <ul className="w-full max-w-md bg-white rounded-lg shadow p-6 space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <li key={index} className="h-6 bg-gray-300 rounded animate-pulse" />
      ))}
    </ul>
  );
};

export default VehicleModelsListSkeleton;
