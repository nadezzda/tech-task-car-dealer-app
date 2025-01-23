"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Select from "../ui/select";
import { TVehicleMake } from "@/types";

export type TFilterFormProps = {
  makes: TVehicleMake[];
};

const FilterForm: React.FC<TFilterFormProps> = ({ makes }) => {
  const [selectedMake, setSelectedMake] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const generatedYears = Array.from(
      { length: currentYear - 2015 + 1 },
      (_, i) => 2015 + i
    );
    setYears(generatedYears);
  }, []);

  const isNextDisabled = !selectedMake || !selectedYear;

  return (
    <form>
      <Select
        label="Select Vehicle Make"
        options={makes.map((make) => ({
          value: make.MakeId,
          label: make.MakeName,
        }))}
        value={selectedMake}
        onChange={(value) => setSelectedMake(value)}
      />

      <Select
        label="Select Model Year"
        options={years.map((year) => ({
          value: year,
          label: `${year}`,
        }))}
        value={selectedYear}
        onChange={(value) => setSelectedYear(value)}
      />

      <div>
        <Link
          href={
            selectedMake && selectedYear
              ? `/result/${selectedMake}/${selectedYear}`
              : "#"
          }
          className={`w-full py-2 px-4 text-white font-semibold rounded-md text-center block ${
            isNextDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          Next
        </Link>
      </div>
    </form>
  );
};

export default FilterForm;
