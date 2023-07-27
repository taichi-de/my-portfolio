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
        <div className="grid w-3/4 grid-cols-1 mx-auto my-4 scrollbar-hide overflow-auto leading-relaxed text-center text-white h-2/3 sm:grid-cols-3">
          {WorksData.map((worksObj) => {
            return (
              <Link href={worksObj.href} key={worksObj.title}>
                <WorksItem {...worksObj} />
              </Link>
            );
          })}
        </div>
        <Link
          href="https://github.com/taichi-de"
          className="inline-flex items-center justify-center m-2 p-2 text-gray-200 bg-green-700 rounded-lg cursor-pointer w-60 hover:bg-yellow-600 hover:outline-none"
        >
          See more in Github
          <FaGithub className="ml-3 w-7 h-7 lg:text-sm md:text-xs" />
        </Link>
      </div>
    </Layout>
  );
}
