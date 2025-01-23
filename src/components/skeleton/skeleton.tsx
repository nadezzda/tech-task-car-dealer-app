"use client";

import React from "react";
import clsx from "clsx";

type SkeletonProps = {
  className?: string;
};

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        "animate-pulse bg-gray-300 rounded",
        className
      )}
    />
  );
};

export default Skeleton;
