import Layout from "../components/Layout";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import WorksItem from "../components/works/WorksItem";
import {
  worksObjOne,
  worksObjTwo,
  worksObjThree,
  worksObjFour,
  worksObjFive,
  worksObjSix,
  worksObjSeven,
  worksObjEight,
  worksObjNine,
  worksObjTen,
  worksObjEleven,
} from "../components/works/WorksData";

export default function Works() {
  return (
    <Layout title="Works">
      <div className="h-full p-4">
        <p className="font-mono text-lg font-bold text-white mt-14">Works</p>
        <div className="grid w-2/3 grid-cols-1 mx-auto my-4 overflow-y-scroll leading-relaxed text-center text-white h-2/3 overscroll-y-auto sm:grid-cols-3">
          <WorksItem {...worksObjEleven} />
          <WorksItem {...worksObjTen} />
          <WorksItem {...worksObjNine} />
          <WorksItem {...worksObjEight} />
          <WorksItem {...worksObjSeven} />
          <WorksItem {...worksObjSix} />
          <WorksItem {...worksObjFive} />
          <WorksItem {...worksObjFour} />
          <WorksItem {...worksObjThree} />
          <WorksItem {...worksObjTwo} />
          <WorksItem {...worksObjOne} />
        </div>
        <Link href={"https://github.com/taichi-de"}>
          <div className="inline-flex items-center justify-center p-2 text-white bg-green-700 rounded-lg cursor-pointer w-60 hover:bg-yellow-500 hover:outline-none">
            See more in Github
            <FaGithub className="ml-3 text-gray-300 w-7 h-7 lg:text-sm md:text-xs hover:text-gray-600" />
          </div>
        </Link>
      </div>
    </Layout>
  );
}
