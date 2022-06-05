import Layout from "../components/Layout";
import ResumeItem from "../components/resume/ResumeItem";
import { resumeObj } from "../components/resume/ResumeData";
import { v4 as uuidv4 } from 'uuid';

export default function Resume() {
  return (
    <Layout title="Resume">
      <div className="h-full p-4">
        <p className="mt-20 font-mono text-lg font-bold text-white">Resume</p>
        <div className="mx-auto overflow-y-scroll leading-relaxed text-center text-white h-4/6 md:w-full overscroll-y-auto sm:w-full md:mt-10">
          {resumeObj.map((obj) => {
            return <ResumeItem key={uuidv4()} year={obj.year} subtitle={obj.subtitle} desc={obj.desc} />
          })}
        </div>
      </div>
    </Layout>
  );
}
