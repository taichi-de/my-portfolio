import Image from 'next/image';

import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About">
      <div className="p-8 leading-loose text-center text-white md:w-4/12 scrollbar-hide overflow-auto h-4/5 sm:w-full">
        <div className="mb-4">
          <p className="mb-4 font-mono text-lg text-bold">About Me</p>
        </div>
        <div className="flex justify-center m-4">
          <Image
            className="rounded-full"
            src="/profile.jpeg"
            width={120}
            height={120}
            alt="profile"
          />
        </div>
        <div>
          <h4>
            Hello! I&apos;am&nbsp;
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block ml-2 mb-2">
              <span className="relative text-white font-serif font-bold">Taichi Tomioka</span>
            </span>
          </h4>
          <p>
            I&apos;m from Japan and studied Agriculture in Akita(Northern Japan).
            <br />
            After graduating from university, I moved to Germany. <br />
            Currently working as a Working student at a german web company while majoring in
            computer science at a university.
          </p>
          <p className="my-3">
            - Skills -
            <br />
            HTML / CSS(Sass) / JavaScript(React, Vue, TS, Next.js) / Java / Ruby(Rails) / GraphQL /
            Python(Flask)
          </p>
          <p className="my-3">
            - Languages -
            <br />
            Japanese / English(B2) / German(C1)
          </p>
          <p className="my-3">
            - Love -
            <br />
            Movies & Tennis & Gardening
          </p>
        </div>
      </div>
    </Layout>
  );
}
