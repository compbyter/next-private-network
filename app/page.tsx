import { client } from '@/client';

export const dynamic = 'force-dynamic';
const getData = async () => {
  try {
    const homepage = client.single('homepage');
    const defaultHomepage = await homepage.find();
    console.log('Homepage: ', defaultHomepage);
    return defaultHomepage;
  } catch (error: any) {
    console.error('Failed fetch homepage data: ', error?.response);
    return null;
  }
};

export default async function Home() {
  const data = await getData();
  return (
    <div className='flex-col'>
      <h1>Your homepage title from cms: {data && data?.data?.homepageTitle}</h1>
      <span>
        (Make sure your Strapi app is running and that your homepage content is
        public)
      </span>
    </div>
  );
}
