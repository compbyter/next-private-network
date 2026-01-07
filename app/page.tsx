import { client } from '@/client';
export const dynamic = 'force-dynamic';
const getData = async () => {
  const homepage = client.single('homepage');
  const defaultHomepage = await homepage.find();
  console.log('Homepage: ', defaultHomepage);
  return defaultHomepage;
};

export default async function Home() {
  const data = await getData();
  return <div>{data.data.homepageTitle}</div>;
}
