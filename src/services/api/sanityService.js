import {s} from 'src/services/config/sanityConfig'

export const fetchAllWorks = async () => {
  try {
    const res = await s.fetch(
        `*[_type == "project"] {
        title,
        slug,
        mainImage {
          asset->{
            _id,
            url
          },
          alt
        },
        link,
      }`
    )
    return res;
  } catch (e) {
    throw new Error("Failed to fetch projects from Sanity: " + e.message);
  }
}

export const fetchSingleWorks = async (slug) => {
  try {
    const res = await s.fetch(
      `*[_type == "project" && slug.current == "${slug}"][0] {
        title,
        slug,
        mainImage {
          asset->{
            _id,
            url
          },
          alt
        },
        link,
      }`
    )
    return res;
  } catch (e) {
    throw new Error("Failed to fetch projects from Sanity: " + e.message);
  }
}

export const fetchRecentWorks = async () => {
  try {
    const res = await s.fetch(
      `*[_type == "project" && publishedAt < now()]|order(publishedAt desc)[0] {
        title,
        slug,
        publishedAt,
        mainImage {
          asset->{
            _id,
            url
          },
          alt
        },
        link,
      }`
    );
    return res;
  } catch (e) {
    throw new Error("Failed to fetch projects from Sanity: " + e.message);
  }
};
