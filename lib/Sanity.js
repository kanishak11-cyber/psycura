import sanityClient from '@sanity/client'
export const client = sanityClient({
    projectId:am2svf9o,
    dataset:production,
    useCdn: false,
    apiVersion:'v1',
    token:process.env.SANITY_TOKEN,

})