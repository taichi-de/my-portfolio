import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import Layout from '../components/Layout';
import { WorksData } from '../components/works/WorksData';
import WorksItem, { WorksObj } from '../components/works/WorksItem';
import { Modal, Text, Image, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

export default function Works() {
  const [modalOpened, setModalOpened] = useState(false);
  const [currentWorksObj, setCurrentWorksObj] = useState<WorksObj | null>(null);
  const isSmallerThanDesktop = useMediaQuery('(max-width: 768px)');

  const openModal = (worksObj: WorksObj) => {
    setCurrentWorksObj(worksObj);
    setModalOpened(true);
  };

  const closeModal = () => {
    setModalOpened(false);
  };
  const theme = useMantineTheme();
  const modalSize = isSmallerThanDesktop ? '95%' : '55%';

  return (
    <Layout title="Works">
      <div className="h-full p-4">
        <p className="font-mono text-lg text-gray-200 mt-16">Works</p>
        <div className="grid w-[90%] sm:w-3/4 grid-cols-1 mx-auto my-4 scrollbar-hide overflow-auto leading-relaxed text-center text-white h-2/3 sm:grid-cols-3">
          {WorksData.map((worksObj) => {
            const tags = currentWorksObj?.desc.split('/');
            return (
              <div key={worksObj.title}>
                <Modal
                  size={modalSize}
                  opened={modalOpened}
                  onClose={closeModal}
                  centered
                  title={currentWorksObj?.title + ' (' + currentWorksObj?.year + ') '}
                  overlayProps={{
                    blur: 3,
                    color: theme.colors.gray[9],
                    opacity: 0.15,
                  }}
                >
                  {currentWorksObj && (
                    <div>
                      <Image
                        src={currentWorksObj.img}
                        alt={currentWorksObj.title}
                        width="100%"
                        height="auto"
                        className="bg-gray-300 rounded-t-lg shadow-md"
                      />
                      <div className="block sm:flex my-4">
                        <div className="w-full">
                          <Text className="w-[90%] mr-2 text-gray-700">
                            {currentWorksObj.remark}
                          </Text>
                          <div className="flex flex-wrap my-2">
                            {tags?.map((tag) => (
                              <Text
                                className="bg-gray-100 opacity-80 text-sky-600 shadow-md mr-2 mb-2 py-1 px-2 rounded-xl h-8"
                                key={tag}
                              >
                                # {tag}
                              </Text>
                            ))}
                          </div>
                        </div>
                        {currentWorksObj.privateRepo ? (
                          <div className="flex w-40 h-10 items-center justify-center bg-gray-400 text-gray-200 p-2 rounded-md">
                            Private
                            <FaGithub className="ml-3 w-6 h-6 lg:text-sm md:text-xs" />
                          </div>
                        ) : (
                          <Link
                            href={currentWorksObj.href}
                            className="flex w-40 h-10 items-center justify-center bg-yellow-600 text-gray-200 p-2 rounded-md shadow-lg"
                          >
                            check on
                            <FaGithub className="ml-3 w-6 h-6 lg:text-sm md:text-xs" />
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </Modal>
                <WorksItem
                  worksObj={worksObj}
                  modalOpened={modalOpened}
                  closeModal={closeModal}
                  openModal={openModal}
                />
              </div>
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
