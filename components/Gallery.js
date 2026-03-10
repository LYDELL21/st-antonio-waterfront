"use client"

import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

export default function Gallery(){

const images=[
{src:"/images/gallery1.avif"},
{src:"/images/gallery2.JPG"},
{src:"/images/gallery3.jpg"},
{src:"/images/gallery4.jpg"},
{src:"/images/gallery5.webp"},
{src:"/images/gallery6.webp"}
]

const [index,setIndex] = useState(-1)

return(

<section id="gallery" className="py-24 bg-black text-white">

<h2 className="text-4xl font-bold text-center mb-12">
Our Gallery
</h2>

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

{images.map((img,i)=>(
<img
key={i}
src={img.src}
onClick={()=>setIndex(i)}
className="rounded-lg cursor-pointer hover:scale-105 transition duration-300"
/>
))}

</div>

<Lightbox
open={index >= 0}
index={index}
close={()=>setIndex(-1)}
slides={images}
/>

</section>

)

}