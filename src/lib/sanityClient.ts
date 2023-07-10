import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId, useCdn } from '.../env'

export const client = createClient({
  token:process.env.SANITY_ACCESS_TOKEN,
  apiVersion:'2023-07-09',
  dataset:'production', 
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn:true,
})
