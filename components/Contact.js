export default function Contact(){

return(

<section id="contact" className="py-24 px-10">

<h2 className="text-4xl font-bold text-center mb-10">
Contact Us
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

<div>

<h3 className="text-xl font-semibold mb-4">
St Antonio Waterfront
</h3>

<p>Assolna, South Goa</p>
<p>Phone: +91 XXXXXXXX</p>
<p>Email: info@stantoniowaterfront.com</p>

<p className="mt-4">
Enjoy riverside dining, fresh seafood, live music and family outings beside the Sal River.
</p>

</div>

<iframe
src="https://maps.google.com/maps?q=assolna%20goa&t=&z=13&ie=UTF8&iwloc=&output=embed"
width="100%"
height="300"
className="rounded-lg"
/>

</div>

</section>

)

}