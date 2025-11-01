
import SlowList from '../../components/SlowList';

export const dynamic = 'force-dynamic';
export default async function DashboardPage() {
  return (
    <main style={{ padding: 24 }}>
      <h2>Dashboard</h2>
      <p>Naive list rendering of 50k items (intentional perf issue). Mission: profile and optimize.</p>
      <SlowList />
    </main>
  );
}
