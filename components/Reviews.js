"use client"

import Script from "next/script"

export default function Reviews(){

return(

<section className="py-24 bg-gray-100">

<h2 className="text-4xl font-bold text-center mb-12">
Customer Reviews
</h2>

<div className="max-w-6xl mx-auto px-6">

<Script
src="https://elfsightcdn.com/platform.js"
strategy="lazyOnload"
/>

<div
className="elfsight-app-e272991d-0050-4654-9e37-9b473d00f859"
data-elfsight-app-lazy
></div>

</div>

</section>

)

}