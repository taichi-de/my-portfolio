import React from "react";

export default function ResumeItem({ year, subtitle, desc }) {
  return (
    <div className="m-3 ">
      <h3 className="inline-flex items-center justify-center w-24 bg-gray-500 ">
        {year}
      </h3>
      <h4 className="my-1 ml-5 font-bold">{subtitle}</h4>
      <p className="ml-5">{desc}</p>
    </div>
  );
}
