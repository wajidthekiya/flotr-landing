import Hero from '../components/home/Hero';
import DestinationFlow from '../components/home/DestinationFlow';
import MovementTypography from '../components/home/MovementTypography';
import VideoGrid from '../components/home/VideoGrid';
import CommunityEnergy from '../components/home/CommunityEnergy';
import FinalCTA from '../components/home/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <VideoGrid />
      <MovementTypography />
      <DestinationFlow />
      <CommunityEnergy />
      <FinalCTA />
    </>
  );
}
