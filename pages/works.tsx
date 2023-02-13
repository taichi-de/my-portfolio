import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import Layout from '../components/Layout';
import { WorksData } from '../components/works/WorksData';
import WorksItem from '../components/works/WorksItem';

export default function Works() {
  return (
    <Layout title="Works">
      <div className="h-full p-4">
        <p className="font-mono text-lg font-bold text-white mt-14">Works</p>
        <div className="grid w-2/3 grid-cols-1 mx-auto my-4 scrollbar-hide overflow-auto leading-relaxed text-center text-white h-2/3 sm:grid-cols-3">
          {WorksData.map((worksObj) => {
            return <WorksItem {...worksObj} key={worksObj.title} />;
          })}
        </div>
        <Link
          href="https://github.com/taichi-de"
          className="inline-flex items-center justify-center m-2 p-2 text-white bg-green-700 rounded-lg cursor-pointer w-60 hover:bg-yellow-500 hover:outline-none"
        >
          See more in Github
          <FaGithub className="ml-3 text-gray-300 w-7 h-7 lg:text-sm md:text-xs hover:text-gray-600" />
        </Link>
      </div>
    </Layout>
  );
}
