'use client'

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */


import { useEffect } from 'react';
import { createClient } from '@sanity/client';

const config = {
  // Your Sanity.io project configuration goes here
  // For example:
  projectId: 'your-sanity-project-id',
  dataset: 'your-sanity-dataset',
  // Add other configuration options as needed
};

export default function StudioPage() {
  useEffect(() => {
    // Initialize the Sanity client with your project configuration
    const client = createClient(config);

    // Fetch data from Sanity using the client here if needed
    // For example:
    // client.fetch('*[_type == "yourSanityType"]')
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data:', error);
    //   });
  }, []);

  return <div>This is your Sanity Studio page.</div>;
}