export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
      <div className="text-center text-white px-6">
        <h1 className="text-6xl font-extrabold">🤖 ToonAI</h1>

        <p className="mt-6 text-xl">
          Create Amazing AI Images & Videos
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <button className="bg-white text-black px-6 py-3 rounded-full font-bold">
            🎨 Generate Image
          </button>

          <button className="bg-black text-white px-6 py-3 rounded-full font-bold">
            🎥 Generate Video
          </button>
        </div>
      </div>
    </main>
  );
}
