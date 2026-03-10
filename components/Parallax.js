export default function Parallax(){

return(

<section
className="h-[60vh] bg-center bg-cover md:bg-fixed flex items-center justify-center"
style={{backgroundImage:"url('/images/river.jpg')"}}
>

<div className="bg-black/50 text-white px-10 py-8 rounded-lg backdrop-blur">

<h2 className="text-3xl font-bold text-center">
Experience Dining by the River
</h2>

</div>

</section>

)

}