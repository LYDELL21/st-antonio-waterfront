"use client"

import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

export default function Gallery(){

const [open,setOpen] = useState(false)
const [index,setIndex] = useState(0)

const images=[
"/images/gallery1.avif",
"/images/gallery2.jpg",
"/images/gallery3.jpg",
"/images/gallery4.jpg",
"/images/gallery5.webp",
"/images/gallery6.webp"
]

return(

<section id="gallery" className="py-24 px-10">

<h2 className="text-4xl font-bold text-center mb-12">
Our Gallery
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

{images.map((img,i)=>(

<img
key={i}
src={img}
className="rounded-lg hover:scale-105 transition duration-300 cursor-pointer"
onClick={()=>{
setIndex(i)
setOpen(true)
}}
/>

))}

</div>

<Lightbox
open={open}
close={()=>setOpen(false)}
slides={images.map((img)=>({src:img}))}
index={index}
/>

</section>

)

}