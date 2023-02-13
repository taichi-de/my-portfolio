import Layout from '../components/Layout';
import { ResumeData } from '../components/resume/ResumeData';
import ResumeItem from '../components/resume/ResumeItem';

export default function Resume() {
  return (
    <Layout title="Resume">
      <div className="h-full p-4">
        <p className="mt-20 font-mono text-lg font-bold text-white">Resume</p>
        <div className="mx-auto scrollbar-hide overflow-auto leading-relaxed text-center text-white h-4/6 md:w-full sm:w-full md:mt-10">
          {ResumeData.map((resumeObj) => {
            return <ResumeItem {...resumeObj} key={resumeObj.subtitle} />;
          })}
        </div>
      </div>
    </Layout>
  );
}
