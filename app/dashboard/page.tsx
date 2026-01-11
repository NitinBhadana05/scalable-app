import Navbar from "@/components/Navbar";
import TaskSection from "@/components/TaskSection";
import NeonBackground from "@/components/NeonBackground";

export default function DashboardPage() {
  return (
    <>
      <NeonBackground />
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <TaskSection />
      </main>
    </>
  );
}
