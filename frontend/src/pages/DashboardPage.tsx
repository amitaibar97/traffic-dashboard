import { Navbar } from "../components/Navbar";
import { useTrafficStats } from "../customHooks/useTrafficStats";
import Loader from "../components/Loader";
import TrafficChartContainer from "../components/Chart/TrafficChartContainer";
import { TrafficTableContainer } from "../components/Table/TrafficTableContainer";
import TrafficForm from "../components/Form/TrafficForm";

export const DashboardPage = () => {
  const { stats, isLoading, error, create, update, remove } = useTrafficStats();

  if (isLoading) return <Loader fullPage/>;

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-danger">Failed to load data</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-8">
        <TrafficChartContainer data={stats} />
        <TrafficForm onSubmit={create.mutate} />
        <TrafficTableContainer
          stats={stats}
          onUpdate={update.mutate}
          onDelete={remove.mutate}
        />
      </main>
    </div>
  );
};
