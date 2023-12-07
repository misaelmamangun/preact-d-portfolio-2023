// Libraries
import { useEffect, useState } from "preact/hooks";
// UI Components
import MainLayout from "src/layouts/Main";
import WorkCard from "src/components/WorkCard";
// Services
import { fetchAllWorks } from "src/services/api/sanityService";

const Works = () => {
  const [works, setWorks] = useState(null);

  useEffect(() => {
    fetchAllWorks()
      .then((data) => {
        setWorks(data);
      })
      .catch(console.error);
  }, []);

  return (
    <MainLayout className="py-4">
      <div className="container mx-auto px-4 mt-8">
        <h1 className="md:text-7xl text-4xl uppercase text-light-400 mb-6">
          Works
        </h1>
        <div className="md:columns-3 gap-3 space-y-4">
          {works &&
            works.map(({ mainImage, slug, title, link }) => (
              <WorkCard
                slug={slug}
                title={title}
                link={link}
                mainImage={mainImage}
              />
            ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Works;
