import Image from 'next/image';
import Link from 'next/link';
import Cta from './cta';

function ImageContainer(params:any) {
	if (params.imgSrc) {
		return(
			<div className="mb-8">
				<Image
					src={params.imgSrc}
					width={params.imgW}
					height={params.imgH}
					alt={params.imgAlt}
				/>
			</div>
		)
	}
	else {
		return null;
	}
}

;
export default function Card(params:any) {
	let classBgColour = 'bg-purple-medium-2';
	let classCtaBgColour = 'bg-purple-medium';
	let classShadowColour = 'hover:shadow-purple-medium';
	let classBasis = 'basis-[49%]';
	if (params.bgColour === 'blue-medium') {
		classBgColour = 'bg-blue-dark';
		classCtaBgColour = 'bg-blue-medium';
		classShadowColour = 'hover:shadow-blue-medium';
	}
	if (params.basisPercentage === 'small') {
		classBasis = 'basis-[34%]';
	}
	if (params.basisPercentage === 'large') {
		classBasis = 'basis-[64%]';
	}
	return (
		<div 
			className={`${classBasis} inline-block mb-[20px] mx-0 min-h-[184px]
			flex flex-col p-4 ${classBgColour} border border-slate-500 h-full opacity-90 hover:opacity-100
			transition-shadow duration-500 hover:shadow-2xl ${classShadowColour}`}
		>
			<Link href={params.href}>
				<ImageContainer {...params} />
			</Link>
			<div>
				<Link href={params.href}><h2 className="mt-0 mb-3">{params.cardTitle}</h2></Link>
				<Link href={params.href}><p className="mb-4 grow">{params.cardText}</p></Link>
				<Cta ctaBgColour={classCtaBgColour} ctaText={params.ctaText} href={params.href} />
			</div>
		</div>
	)
}
  