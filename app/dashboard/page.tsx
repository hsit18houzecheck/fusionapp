export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <div className="flex flex-col p-5 sm:p-10">
        <h1 className="text-3xl font-semibold mb-4 text-gray-100">Dashboard</h1>
        <p className="text-base text-gray-500 mb-8 leading-6">
          Welcome to your dashboard. This is a simple layout page where you can add your content.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          <div className="bg-zinc-900 p-5 rounded-lg border border-zinc-800">
            <h3 className="text-lg font-medium mb-2">Card One</h3>
            <p className="text-sm text-gray-500">Add your content here</p>
          </div>

          <div className="bg-zinc-900 p-5 rounded-lg border border-zinc-800">
            <h3 className="text-lg font-medium mb-2">Card Two</h3>
            <p className="text-sm text-gray-500">Add your content here</p>
          </div>

          <div className="bg-zinc-900 p-5 rounded-lg border border-zinc-800">
            <h3 className="text-lg font-medium mb-2">Card Three</h3>
            <p className="text-sm text-gray-500">Add your content here</p>
          </div>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
          <h2 className="text-xl font-medium mb-3">Main Content Section</h2>
          <p className="text-sm text-gray-500 leading-5">
            This is the main content area. You can replace this with your dashboard data, charts,
            tables, or any other content you need to display.
          </p>
        </div>
      </div>
    </div>
  );
}
