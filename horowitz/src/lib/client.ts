import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// const token = import.meta.env.VITE_SANITY_SECRET_TOKEN;
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;

export const client = createClient({
  projectId: projectId,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
  // token: token,
  // ignoreBrowserTokenWarning: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}
