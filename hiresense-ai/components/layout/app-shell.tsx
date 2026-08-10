export default function AppShell({
  sidebar,
  header,
  children,
}: {
  sidebar: React.ReactNode;
  header: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-slate-100">
      {sidebar}

      <div className="flex min-w-0 flex-1 flex-col">
        {header}

        <main className="flex-1 overflow-auto">
          <div className="flex w-full flex-col gap-8 p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}