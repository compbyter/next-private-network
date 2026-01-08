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
    <div>
      Your Homepage Title from Strapi: {data && data?.data?.homepageTitle}
    </div>
  );
}
