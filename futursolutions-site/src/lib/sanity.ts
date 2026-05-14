import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'ghe71fy8',
  dataset: 'production',
  apiVersion: '2026-05-11',
  useCdn: true,
});
