import React from "react";

export default function ResumeItem({ year, subtitle, desc }) {
  return (
    <div className="m-4">
      <h3 className="inline-flex items-center justify-center w-24 bg-gray-500 sm:text-xs">
        {year}
      </h3>
      <h4 className="my-1 font-bold sm:text-xs">{subtitle}</h4>
      <p className="sm:text-xs">{desc}</p>
    </div>
  );
}
