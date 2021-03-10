import React from "react";
import Image from "next/image";

export default function WorksItem({ title, img, alt, desc }) {
  return (
    <div className="m-4 bg-gray-200 rounded-lg">
      <Image
        src={img}
        alt={alt}
        width={400}
        height={250}
        className="rounded-t-lg"
      />
      <div className="items-center justify-center p-2 text-gray-500">
        <h3 className="font-bold">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}
