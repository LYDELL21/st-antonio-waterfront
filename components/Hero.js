export default function Hero(){

return(

<section id="home" className="relative h-screen overflow-hidden">

<video
autoPlay
muted
loop
playsInline
className="absolute w-full h-full object-cover"
>

<source src="/videos/hero.mp4" type="video/mp4"/>

</video>

<div className="absolute inset-0 bg-black/50 flex items-center justify-center">

<div className="text-center text-white">

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