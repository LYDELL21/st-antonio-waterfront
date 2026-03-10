export default function Contact() {

  return (

    <section id="contact" className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <div className="space-y-6">

          <h2 className="text-4xl font-bold">
            Contact Us
          </h2>

          <div className="space-y-4 text-lg">

            <p>📍 Assolna, South Goa</p>

            <p>📞 +91 9876543210</p>

            <p>📧 info@stantoniowaterfront.com</p>

            <p>🕒 Open Daily: 12 PM – 11 PM</p>

          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            View on Google Maps
          </a>

        </div>

        <iframe
          src="https://maps.google.com/maps?q=assolna%20goa&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-96 rounded-lg"
        />

      </div>

    </section>

  )

}