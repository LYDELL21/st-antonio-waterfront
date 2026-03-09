"use client"

import Slider from "react-slick"

export default function Hero(){

const settings = {
dots:true,
infinite:true,
speed:800,
slidesToShow:1,
slidesToScroll:1,
autoplay:true,
autoplaySpeed:4000
}

return(

<section id="home">

<Slider {...settings}>

<div>
<div
className="h-screen bg-cover bg-center flex items-center justify-center"
style={{backgroundImage:"url('/images/hero.jpg')"}}
>

<div className="bg-black/50 p-10 rounded-xl text-white text-center">

<h1 className="text-6xl font-bold mb-4">
St Antonio Waterfront
</h1>

<p className="text-xl mb-6">
Riverside Dining in Assolna, South Goa
</p>

<button className="bg-yellow-400 text-black px-8 py-3 rounded-full">
Book a Table
</button>

</div>

</div>
</div>

<div>
<div
className="h-screen bg-cover bg-center"
style={{backgroundImage:"url('/images/gallery1.jpg')"}}
/>
</div>

<div>
<div
className="h-screen bg-cover bg-center"
style={{backgroundImage:"url('/images/gallery2.jpg')"}}
/>
</div>

</Slider>

</section>

)

}