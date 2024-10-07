import Link from 'next/link';

;
export default function Cta(params:any) {

	let colourClass = params.ctaBgColour ? params.ctaBgColour : 'bg-purple-medium';

	return (
		<Link 
			href={params.href ? params.href : ''} 
			className={`inline-block py-3 px-4 uppercase font-bold border ${colourClass} 
				text-white no-underline  hover:bg-white hover:text-black hover:border-black`}
		>
			{params.ctaText}
		</Link>
	)
}
