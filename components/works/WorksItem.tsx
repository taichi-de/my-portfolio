/* eslint-disable sort-keys-custom-order/object-keys */
import Image from 'next/image';

export interface WorksObj {
  title: string;
  desc: string;
  href: string;
  img: string;
  privateRepo: boolean;
  remark: string;
  year: string;
}

export default function WorksItem({
  worksObj,
  openModal,
}: {
  closeModal: () => void;
  modalOpened: boolean;
  openModal: (worksObj: WorksObj) => void;
  worksObj: WorksObj;
}) {
  return (
    <div
      onClick={() => openModal(worksObj)}
      className="m-4 bg-gray-200 rounded-lg hover:cursor-pointer"
    >
      <Image
        src={worksObj.img}
        alt={worksObj.title}
        width={400}
        height={250}
        className="rounded-t-lg"
      />
      <div className="flex-wrap justify-center mx-auto p-2 text-xs text-gray-500">
        <div className="flex justify-center">
          <h3 className="font-bold ml-2">{worksObj.title}</h3>
        </div>
        <p>{worksObj.desc}</p>
      </div>
    </div>
  );
}
