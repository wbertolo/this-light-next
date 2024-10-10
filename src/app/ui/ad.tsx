'use client';
import Script from 'next/script';

export default function Ad() {
	return (
		<div className="header_ad my-5">
			<Script 
				async 
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2263884572379793"
				crossOrigin="anonymous"
			/>
			<ins className="adsbygoogle"
				style={{display:'block'}}
				data-ad-client="ca-pub-2263884572379793"	
				data-ad-slot="7127628785"
				data-ad-format="auto"
				data-full-width-responsive="true"></ins>
			<Script data-ad-client="ca-pub-2263884572379793" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
		</div>
	)
}
  