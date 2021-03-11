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
} from "../components/works/WorksData";

export default function Works() {
  return (
    <Layout title="Works">
      <div className="h-full p-4">
        <p className="font-mono text-lg font-bold text-white mt-14">Works</p>
        <div className="grid w-9/12 grid-cols-1 mx-auto my-4 overflow-y-scroll leading-relaxed text-center text-white h-3/4 overscroll-y-auto sm:grid-cols-3">
          <WorksItem {...worksObjOne} />
          <WorksItem {...worksObjTwo} />
          <WorksItem {...worksObjThree} />
          <WorksItem {...worksObjFour} />
          <WorksItem {...worksObjFive} />
          <WorksItem {...worksObjSix} />
          <Link href={"https://github.com/taichi-de"}>
            <div className="inline-flex items-center justify-center text-white bg-green-700 rounded-lg md:p-4 md:w-60 sm:w-40">
              See more in Github
              <FaGithub className="ml-3 text-gray-300 md:w-7 md:h-7 sm:w-5 sm:h-5 lg:text-sm md:text-xs hover:text-gray-600" />
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
