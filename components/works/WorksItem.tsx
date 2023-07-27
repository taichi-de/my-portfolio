import Image from 'next/image';
import { FaLock } from 'react-icons/fa';

type WorksItemProps = {
  title: string;
  alt: string;
  desc: string;
  img: string;
  privateRepo: boolean;
};

export default function WorksItem({ title, alt, desc, img, privateRepo }: WorksItemProps) {
  return (
    <div className="m-4 bg-gray-200 rounded-lg">
      <Image src={img} alt={alt} width={400} height={250} className="rounded-t-lg" />
      <div className="flex-wrap justify-center mx-auto p-2 text-xs text-gray-500">
        <div className="flex justify-center">
          {privateRepo && <FaLock />}
          <h3 className="font-bold ml-2">{title}</h3>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}
