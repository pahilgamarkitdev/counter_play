export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Heroes</h1>
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
          </div>
          <p className="text-gray-400 mt-4">Loading heroes...</p>
        </div>
      </div>
    </div>
  );
}