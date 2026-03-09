export default function Menu() {

return (

<section id="menu" className="py-24 bg-gray-100">

<h2 className="text-4xl font-bold text-center mb-16">
Popular Dishes
</h2>

<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition">

<img
src="/images/food1.png"
className="w-full h-64 object-cover"
/>

<div className="p-6 text-center">

<h3 className="text-xl font-semibold mb-2">
Calamari Rings
</h3>

<p className="text-gray-600">
Fresh fried squid served with sauce
</p>

</div>

</div>

<div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition">

<img
src="/images/food2.png"
className="w-full h-64 object-cover"
/>

<div className="p-6 text-center">

<h3 className="text-xl font-semibold mb-2">
Chicken Tandoori
</h3>

<p className="text-gray-600">
Traditional grilled chicken with spices
</p>

</div>

</div>

<div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition">

<img
src="/images/food3.png"
className="w-full h-64 object-cover"
/>

<div className="p-6 text-center">

<h3 className="text-xl font-semibold mb-2">
Fish Rava Fry
</h3>

<p className="text-gray-600">
Classic Goan style crispy fish fry
</p>

</div>

</div>

</div>

</section>

)

}