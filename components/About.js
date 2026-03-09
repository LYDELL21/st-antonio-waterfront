"use client"

import { motion } from "framer-motion"

export default function About(){

return(

<section id="about" className="py-24 px-10 bg-gray-100">

<motion.div
initial={{opacity:0,y:80}}
whileInView={{opacity:1,y:0}}
transition={{duration:1}}
viewport={{once:true}}
className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
>

<img
src="/images/river.webp"
className="rounded-lg"
/>

<div>

<h2 className="text-4xl font-bold mb-4">
About St Antonio Waterfront
</h2>

<p className="text-gray-700">
Located in Assolna, South Goa, St Antonio Waterfront offers relaxing riverside dining with fresh seafood, live music and a beautiful view of the Sal River.
</p>

</div>

</motion.div>

</section>

)

}