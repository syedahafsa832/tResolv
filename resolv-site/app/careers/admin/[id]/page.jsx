import AdminGate from '@/components/careers/admin/AdminGate';
import AdminDetail from '@/components/careers/admin/AdminDetail';

// No pre-rendered ids: the page is a shell and each id renders on first request.
export function generateStaticParams() { return []; }
export const metadata = { title: 'Application | tResolv admin', robots: { index: false, follow: false } };

export default function AdminApplicationPage({ params }) {
  return <AdminGate><AdminDetail id={params.id} /></AdminGate>;
}
