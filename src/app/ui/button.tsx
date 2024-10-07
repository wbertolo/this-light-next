export default function Button(params:any) {

	let colourClass = params.ctaBgColour ? params.ctaBgColour : 'bg-purple-medium';

	return (
		<button 
			className="inline-block py-3 px-4 uppercase font-bold border bg-purple-medium text-white no-underline hover:bg-white hover:text-black hover:border-black"
			type={params.type} 
			onClick={params.onClick}
		>
			{params.ctaText}
		</button>
	)
}
