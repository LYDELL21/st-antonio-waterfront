export default function Hero(){

return(

<section id="home" className="relative h-screen overflow-hidden">

{/* Video only on desktop */}

<video
autoPlay
muted
loop
playsInline
className="absolute w-full h-full object-cover hidden md:block"
>

<source src="/videos/hero.mp4" type="video/mp4"/>

</video>

{/* Mobile fallback image */}

<div
className="absolute w-full h-full bg-cover bg-center md:hidden"
style={{backgroundImage:"url('/images/hero.jpg')"}}
/>

<div className="absolute inset-0 bg-black/50 flex items-center justify-center">

<div className="text-center text-white px-6">

<h1 className="text-4xl md:text-6xl font-bold mb-4">
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