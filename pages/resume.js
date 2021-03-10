import Layout from "../components/Layout";
import ResumeItem from "./ResumeItem";
import {
  resumeObjOne,
  resumeObjTwo,
  resumeObjThree,
  resumeObjFour,
  resumeObjFive,
} from "./resumeData";

export default function resume() {
  return (
    <Layout title="Resume">
      <div className="flex flex-col items-center justify-center w-8/12 leading-relaxed text-center text-white ">
        <div className="m-4">
          <p className="font-mono text-lg font-bold">Resume</p>
        </div>
        <ResumeItem {...resumeObjOne} />
        <ResumeItem {...resumeObjTwo} />
        <ResumeItem {...resumeObjThree} />
        <ResumeItem {...resumeObjFour} />
        <ResumeItem {...resumeObjFive} />
      </div>
    </Layout>
  );
}
