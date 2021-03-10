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
      <div className="h-full p-4">
        <p className="mt-20 font-mono text-lg font-bold text-white">Resume</p>
        <div className="mx-auto overflow-y-scroll leading-relaxed text-center text-white h-4/6 md:w-full overscroll-y-auto sm:w-full md:mt-10">
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
