export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 flex items-center justify-center">

        <div className="text-center text-white px-10 py-8 backdrop-blur-md bg-black/30 rounded-xl">

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            St Antonio Waterfront
          </h1>

          <p className="text-lg mb-6">
            Riverside Dining in Assolna, South Goa
          </p>

          <a
            href="#contact"
            className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
          >
            Book a Table
          </a>

        </div>
      </div>
    </section>
  )
}