import sanityClient from "@sanity/client";

export const s = sanityClient({
  projectId: import.meta.env.VITE_PROJECT_ID,
  dataset: import.meta.env.VITE_DATASET,
  useCdn: true,
  apiVersion: "2022-08-10",
});