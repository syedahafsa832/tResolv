import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ApplyForm from '@/components/careers/ApplyForm';
import { buildMetadata } from '@/lib/seo';
import '../careers.css';

export const metadata = {
  ...buildMetadata({
    title: 'Apply: Lead Acquisition | tResolv',
    description: 'Apply for the Lead Acquisition role at tResolv (commission-based). About 10 minutes, no CV needed.',
    path: '/careers/apply',
  }),
  robots: { index: false, follow: false },
};

export default function ApplyPage() {
  return (
    <>
      <Nav />
      <main className="cr-root">
        <div className="cr-glow" aria-hidden="true" />
        <ApplyForm />
      </main>
      <Footer />
    </>
  );
}
