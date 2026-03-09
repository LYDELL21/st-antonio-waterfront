export default function Navbar() {

return(

<nav className="fixed top-0 w-full backdrop-blur-md bg-black/40 text-white z-50">

<div className="max-w-7xl mx-auto flex justify-between items-center p-5">

<h1 className="text-2xl font-bold">
St Antonio Waterfront
</h1>

<div className="flex gap-8">

<a href="#home" className="hover:text-yellow-400">Home</a>
<a href="#about" className="hover:text-yellow-400">About</a>
<a href="#gallery" className="hover:text-yellow-400">Gallery</a>
<a href="#menu" className="hover:text-yellow-400">Menu</a>
<a href="#contact" className="hover:text-yellow-400">Contact</a>

</div>

</div>

</nav>

)

}