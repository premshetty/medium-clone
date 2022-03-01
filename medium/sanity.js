import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from 'next-sanity'
export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'medium-sanity',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECTID,
  apiVersion: '2021-03-25',

  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)
export const urlFor = (source) => {
  createImageUrlBuilder(config).image(source)
}
export const useCurrentUser = createCurrentUserHook(config)