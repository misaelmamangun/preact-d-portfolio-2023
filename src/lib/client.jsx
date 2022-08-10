import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '6kpzhc7k',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-08-10',
})
