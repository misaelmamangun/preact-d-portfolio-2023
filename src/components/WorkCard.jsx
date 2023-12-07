import PropTypes from "prop-types";

const WorkCard = (props) => {
  const { mainImage, slug, title, link } = props;

  return (
    <div className="bg-gray-200 break-inside-avoid relative" key={slug.current}>
      <img alt={title} src={mainImage.asset.url} />
      <div className="hover:opacity-100 ease-linear duration-300 opacity-0 static">
        <div className="absolute w-full h-full flex flex-col items-center justify-center top-0 bg-gray-800 bg-opacity-70">
          <h2 className="text-2xl text-light-400 uppercase font-bold">
            {title}
          </h2>
          <div className="mt-4 flex gap-2">
            <a
              href={`/work/${slug.current}`}
              className="p-2 px-6 border-3 uppercase text-light-400 font-600"
            >
              View
            </a>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 px-6 border-3 uppercase text-light-400 font-600"
            >
              Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

WorkCard.propTypes = {
  mainImage: PropTypes.object,
  slug: PropTypes.object,
  title: PropTypes.string,
  link: PropTypes.string,
};

export default WorkCard;
