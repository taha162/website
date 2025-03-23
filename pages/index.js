import WebLinks from '../components/WebLinks';
import Seo from '../components/Seo';
import seoData from '../next-seo.config';


export default function Home() {
  const page = {
    title: seoData.openGraph.title,
    excerpt: 'home',
    slug: '/',
    coverImage: 'public/PhotoRoom-20250322_110724.png'
  };
  return (
    <>
      <Seo page={page} />
      <WebLinks />
    </>
  )
}

