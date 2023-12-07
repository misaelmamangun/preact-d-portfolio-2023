import { useEffect, useState } from "preact/hooks";
import { fetchRecentWorks } from "src/services/api/sanityService";

const RecentWork = () => {
  const [work, setWork] = useState(null);
  useEffect(() => {
    fetchRecentWorks()
      .then((data) => {
        setWork(data);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="container mx-auto px-4 mt-8">
      <h1 className="md:text-7xl text-4xl uppercase text-light-400">
        Recent Works
      </h1>
      <div className="mt-6">
        {work && <img src={work?.mainImage?.asset.url} alt="Recent Work" />}
      </div>
    </section>
  );
};

export default RecentWork;
