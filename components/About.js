"use client"

import { motion } from "framer-motion"

export default function About(){

return(

<motion.section
id="about"
className="py-24 bg-gray-100"
initial={{opacity:0, y:50}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<img
src="/images/river.webp"
className="rounded-lg shadow-lg"
/>

<div className="space-y-6">

<h2 className="text-4xl font-bold text-black">
About St Antonio Waterfront
</h2>

<p className="text-gray-700 max-w-xl">
Located in Assolna, South Goa, St Antonio Waterfront offers relaxing riverside
dining with fresh seafood, live music and a beautiful view of the Sal River.
</p>

</div>

</div>

</motion.section>

)

}