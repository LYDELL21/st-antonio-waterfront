export default function Contact(){

return(

<section id="contact" className="py-24 bg-gray-100">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl font-bold text-center mb-12">
Contact Us
</h2>

<div className="grid md:grid-cols-2 gap-12">

{/* Contact Details */}

<div className="space-y-6">

<h3 className="text-2xl font-semibold">
St Antonio Waterfront
</h3>

<p>
📍 Assolna, South Goa
</p>

<p>
📞 +91 9876543210
</p>

<p>
📧 info@stantoniowaterfront.com
</p>

<p>
🕒 Open Daily: 12 PM – 11 PM
</p>

<a
href="https://maps.google.com"
target="_blank"
className="inline-block bg-black text-white px-6 py-3 rounded-lg mt-4 hover:bg-gray-800"
>
View on Google Maps
</a>

</div>

{/* Google Map */}

<div>

<iframe
src="https://maps.google.com/maps?q=assolna%20goa&t=&z=13&ie=UTF8&iwloc=&output=embed"
className="w-full h-96 rounded-lg"
loading="lazy"
/>

</div>

</div>

</div>

</section>

)

}