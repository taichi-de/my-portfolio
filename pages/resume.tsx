import Layout from '../components/Layout';
import { ResumeData } from '../components/resume/ResumeData';
import { Timeline, Text } from '@mantine/core';

export default function Resume() {
  return (
    <Layout title="Resume">
      <div className="h-full pt-20">
        <p className="mt-4 sm:mt-10 text-lg text-gray-200">Resume</p>
        <Timeline
          active={0}
          bulletSize={24}
          lineWidth={2}
          className="mx-auto my-10 px-[15%] sm:px-[5%] scrollbar-hide overflow-auto leading-relaxed text-center h-4/6 md:w-full sm:w-full md:mt-10"
        >
          {ResumeData.map((resumeObj) => {
            return (
              <Timeline.Item
                bullet={<resumeObj.icon size={12} />}
                title={resumeObj.subtitle}
                key={resumeObj.subtitle}
                color="cyan"
                className="text-gray-300"
              >
                <Text color="gray.4" size="sm">
                  {resumeObj.desc}
                </Text>
                <Text color="gray.5" size="xs" mt={4}>
                  {resumeObj.year}
                </Text>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
    </Layout>
  );
}
