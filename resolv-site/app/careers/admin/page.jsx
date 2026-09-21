import AdminGate from '@/components/careers/admin/AdminGate';
import AdminList from '@/components/careers/admin/AdminList';

export const metadata = { title: 'Careers admin | tResolv', robots: { index: false, follow: false } };

export default function AdminPage() {
  return <AdminGate><AdminList /></AdminGate>;
}
