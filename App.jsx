function App() {
  return (
    <div className="min-h-screen bg-[#142214] text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-green-400">
          PlantStore
        </h1>

        <div className="flex gap-6">
          <a href="#">Home</a>
          <a href="#">Plants</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center mt-16">
        <h2 className="text-5xl font-bold">
          Earth's First Love
        </h2>

        <p className="mt-5 text-gray-300 max-w-xl">
          Discover beautiful indoor plants that bring nature into your home.
        </p>

        <button className="mt-8 bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full">
          Shop Now
        </button>
      </section>
    </div>
  );
}

export default App;