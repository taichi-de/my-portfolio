import Image from 'next/image';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About">
      <div className="p-8 leading-loose text-center text-gray-200 md:w-4/12 scrollbar-hide overflow-auto h-4/5 sm:w-full">
        <div className="mb-4">
          <p className="mb-4 font-mono text-lg">About Me</p>
        </div>
        <div className="flex justify-center m-4">
          <Image
            className="rounded-full mb-2"
            src="/profileImg.png"
            width={120}
            height={120}
            alt="profile img"
          />
        </div>
        <div>
          <h4>
            Hello! I&apos;am&nbsp;
            <span className="bg-gradient-to-r from-purple-500 to-pink-400 text- font-serif font-bold py-1 px-2">
              Taichi Tomioka
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
            HTML / CSS(Sass) / JavaScript(React(Next.js), Vue, TS) / Java / Ruby(Rails) / GraphQL /
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
            DIY & Tennis & Gardening & Travel
          </p>
        </div>
      </div>
    </Layout>
  );
}
