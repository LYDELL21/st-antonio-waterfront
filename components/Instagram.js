export default function Instagram() {

  return (

    <section className="py-24 bg-black text-white text-center">

      <h2 className="text-4xl font-bold mb-12">
        Follow Us on Instagram
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">

        <a href="https://www.instagram.com/st.antonio_waterfront_" target="_blank">
          <img src="/images/gallery1.avif" className="rounded-lg hover:scale-105 transition"/>
        </a>

        <a href="https://www.instagram.com/st.antonio_waterfront_" target="_blank">
          <img src="/images/gallery2.JPG" className="rounded-lg hover:scale-105 transition"/>
        </a>

        <a href="https://www.instagram.com/st.antonio_waterfront_" target="_blank">
          <img src="/images/gallery3.jpg" className="rounded-lg hover:scale-105 transition"/>
        </a>

        <a href="https://www.instagram.com/st.antonio_waterfront_" target="_blank">
          <img src="/images/gallery4.jpg" className="rounded-lg hover:scale-105 transition"/>
        </a>

      </div>

      <a
        href="https://www.instagram.com/st.antonio_waterfront_"
        target="_blank"
        className="mt-10 inline-block bg-pink-600 px-6 py-3 rounded-full hover:bg-pink-700 transition"
      >
        Visit Our Instagram
      </a>

    </section>

  )

}