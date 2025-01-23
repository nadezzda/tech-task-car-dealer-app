'use client'
import { useRouter } from "next/navigation";

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBackClick}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
    >
      Back
    </button>
  );
};

export default BackButton;
