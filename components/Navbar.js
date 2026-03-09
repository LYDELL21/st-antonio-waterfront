"use client"

import { useState } from "react"

export default function Navbar(){

const [open,setOpen] = useState(false)

return(

<nav className="fixed top-0 w-full bg-black/50 backdrop-blur text-white z-50">

<div className="max-w-7xl mx-auto flex justify-between items-center p-4">

<h1 className="text-xl font-bold">
St Antonio Waterfront
</h1>

{/* Desktop menu */}

<div className="hidden md:flex gap-8">

<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#gallery">Gallery</a>
<a href="#menu">Menu</a>
<a href="#contact">Contact</a>

</div>

{/* Mobile button */}

<button
className="md:hidden"
onClick={()=>setOpen(!open)}
>

☰

</button>

</div>

{/* Mobile menu */}

{open && (

<div className="md:hidden flex flex-col items-center gap-4 pb-4">

<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#gallery">Gallery</a>
<a href="#menu">Menu</a>
<a href="#contact">Contact</a>

</div>

)}

</nav>

)

}