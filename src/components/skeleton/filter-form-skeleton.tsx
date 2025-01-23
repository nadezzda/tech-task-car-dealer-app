import Skeleton from "./skeleton";

const FilterFormSkeleton: React.FC = () => {
    return (
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    );
  };
  
  export default FilterFormSkeleton;
  