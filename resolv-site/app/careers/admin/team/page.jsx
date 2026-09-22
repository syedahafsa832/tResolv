import AdminGate from '@/components/careers/admin/AdminGate';
import AdminTeam from '@/components/careers/admin/AdminTeam';

export const metadata = { title: 'Team overview | tResolv admin', robots: { index: false, follow: false } };

export default function AdminTeamPage() {
  return <AdminGate><AdminTeam /></AdminGate>;
}
