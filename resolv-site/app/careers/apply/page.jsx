import { CareersHeader, CareersFooter } from '@/components/careers/CareersChrome';
import ApplyForm from '@/components/careers/ApplyForm';
import { buildMetadata } from '@/lib/seo';

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
      <CareersHeader />
      <main className="cr-apply">
        <ApplyForm />
      </main>
      <CareersFooter />
    </>
  );
}
