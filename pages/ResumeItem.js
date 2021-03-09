import React from "react";

export default function ResumeItem({ year, subtitle, desc }) {
  return (
    <div className="m-3 text-left border-l border-solid">
      <h3 className="w-24 text-center bg-gray-500">{year}</h3>
      <h4 className="my-2 ml-5 font-bold">{subtitle}</h4>
      <p className="ml-5">{desc}</p>
    </div>
  );
}
