import Header from "@/app/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-blue-950 text-gray-200 antialiased min-h-screen flex flex-col">
      <div id="main-container" className="relative flex-grow stars">
        <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-sm fixed"></div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Header button="logout" />
          <main className="flex-grow container mx-auto px-6 py-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
