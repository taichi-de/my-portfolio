import Layout from "../components/Layout";
import ResumeItem from "../components/resume/ResumeItem";
import {
  resumeObjOne,
  resumeObjTwo,
  resumeObjThree,
  resumeObjFour,
  resumeObjFive,
} from "../components/resume/ResumeData";

export default function Resume() {
  return (
    <Layout title="Resume">
      <div className="p-4">
        <p className="m-4 font-mono text-lg font-bold text-white">Resume</p>
        <div className="h-full m-4 overflow-y-scroll leading-relaxed text-center text-white md:w-8/12 overscroll-y-auto sm:w-full">
          <ResumeItem {...resumeObjOne} />
          <ResumeItem {...resumeObjTwo} />
          <ResumeItem {...resumeObjThree} />
          <ResumeItem {...resumeObjFour} />
          <ResumeItem {...resumeObjFive} />
        </div>
      </div>
    </Layout>
  );
}
