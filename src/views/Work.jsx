// Libraries
import { useEffect, useState } from "preact/hooks";
import PropTypes from "prop-types";
// UI Components
import MainLayout from "src/components/MainLayout";
// Services
import { fetchSingleWorks } from "src/services/api/sanityService";

const Work = (props) => {
  const [work, setWork] = useState(null);
  const { slug } = props;

  useEffect(() => {
    fetchSingleWorks(slug)
      .then((data) => {
        setWork(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const { title, mainImage } = work || {};

  return (
    <MainLayout className="py-4">
      <div className="container mx-auto px-4 mt-8">
        <h1 className="md:text-7xl text-4xl uppercase text-light-400 mb-6">
          {title}
        </h1>
        <div>
          <img src={mainImage?.asset.url} />
        </div>
      </div>
    </MainLayout>
  );
};

Work.PropTypes = {
  slug: PropTypes.string,
};

export default Work;
