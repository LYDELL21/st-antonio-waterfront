export default function Menu() {

  return (

    <section id="menu" className="py-24 px-6 bg-gray-100">

      <h2 className="text-4xl font-bold text-center mb-12">
        Popular Dishes
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition text-center">

          <img
            src="/images/food1.png"
            className="rounded-lg mb-4 hover:scale-105 transition"
          />

          <h3 className="text-xl font-semibold">
            Calamari Rings
          </h3>

          <p className="text-gray-600">
            Fresh fried squid served with sauce
          </p>

        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition text-center">

          <img
            src="/images/food2.png"
            className="rounded-lg mb-4 hover:scale-105 transition"
          />

          <h3 className="text-xl font-semibold">
            Chicken Tandoori
          </h3>

          <p className="text-gray-600">
            Traditional grilled chicken with spices
          </p>

        </div>

        <div className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition text-center">

          <img
            src="/images/food3.png"
            className="rounded-lg mb-4 hover:scale-105 transition"
          />

          <h3 className="text-xl font-semibold">
            Fish Rava Fry
          </h3>

          <p className="text-gray-600">
            Classic Goan style crispy fish fry
          </p>

        </div>

      </div>

    </section>

  )

}