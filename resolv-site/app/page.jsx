import Nav         from '@/components/Nav';
import Hero        from '@/components/Hero';
import HowItWorks  from '@/components/HowItWorks';
import Features    from '@/components/Features';
import Pricing     from '@/components/Pricing';
import FAQ         from '@/components/FAQ';
import PreCTA      from '@/components/PreCTA';
import Footer      from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
        <PreCTA />
      </main>
      <Footer />
    </>
  );
}
