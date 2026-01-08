import { client } from '@/client';
export const dynamic = 'force-dynamic';
const getData = async () => {
  try {
    const homepage = client.single('homepage');
    const defaultHomepage = await homepage.find();
    console.log('Homepage: ', defaultHomepage);
    return defaultHomepage;
  } catch (error: any) {
    console.error('Failed fetch homepage data: ', error?.response?.message);
    return null;
  }
};

export default async function Home() {
  const data = await getData();
  return <div>Homepage title: {data && data?.data?.homepageTitle}</div>;
}
