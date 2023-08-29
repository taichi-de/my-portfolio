import Image from 'next/image';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About">
      <div className="p-8 leading-loose text-center text-gray-200 md:w-4/12 scrollbar-hide overflow-auto h-4/5 sm:w-full">
        <h1 className="mb-4 font-mono text-lg">About Me</h1>
        <div className="relative flex justify-center my-12">
          <div className="rounded-text rotating">
            <svg viewBox="0 0 200 200">
              <path
                id="textPath"
                d="M 85,0 A 85,85 0 0 1 -85,0 A 85,85 0 0 1 85,0"
                transform="translate(100,100)"
                fill="none"
                stroke-width="0"
              />
              <g font-size="13px">
                <text text-anchor="start">
                  <textPath className="coloring" xlinkHref="#textPath" startOffset="0%">
                    Currently seeking for a new position as a Junior Frontend developer
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
          <Image
            className="profil-image"
            src="/profileImg.png"
            width={180}
            height={180}
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
            I&apos;m from Japan and studied Agriculture in Akita.
            <br />
            After graduating from university, <br />I moved to Germany. <br />
            Currently working as a Working student at a german IT company while majoring in computer
            science at a university.
          </p>
          <p className="my-3">
            - Skills -
            <br />
            HTML / CSS(Tailwindcss, MantineUI) / JavaScript(React(Next.js), Vue.js, TS) / Java /
            Python(Flask) / Supabase / SQL / Linux Shell
          </p>
          <p className="my-3">
            - Languages -
            <br />
            Japanese / English / German
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
