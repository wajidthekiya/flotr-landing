import Hero from '../components/home/Hero';
import ValueProps from '../components/home/ValueProps';
import HowItWorks from '../components/home/HowItWorks';
import VideoGrid from '../components/home/VideoGrid';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <VideoGrid />
      <ValueProps />
      <FinalCTA />
    </>
  );
}
