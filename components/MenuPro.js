export default function MenuPro(){

return(

<section id="menu" className="py-24 bg-gray-100">

<h2 className="text-4xl font-bold text-center mb-12">
Our Menu
</h2>

<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6">

<div>

<h3 className="text-2xl font-semibold mb-4">
Starters
</h3>

<ul className="space-y-3">

<li className="flex justify-between">
<span>Calamari Rings</span>
<span>₹450</span>
</li>

<li className="flex justify-between">
<span>Prawn Fry</span>
<span>₹550</span>
</li>

<li className="flex justify-between">
<span>Chicken Tandoori</span>
<span>₹500</span>
</li>

</ul>

</div>

<div>

<h3 className="text-2xl font-semibold mb-4">
Goan Specials
</h3>

<ul className="space-y-3">

<li className="flex justify-between">
<span>Fish Rava Fry</span>
<span>₹600</span>
</li>

<li className="flex justify-between">
<span>Goan Fish Curry</span>
<span>₹650</span>
</li>

<li className="flex justify-between">
<span>Prawn Balchao</span>
<span>₹700</span>
</li>

</ul>

</div>

</div>

</section>

)

}