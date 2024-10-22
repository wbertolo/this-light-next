'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
 
// ...
 
export default function TopNav() {
  const pathname = usePathname();
 
  const links = [
	{ name: 'Home', href: '/'},
	{ name: 'Music', href: '/music/'},
	// { name: 'Submit Music', href: '/submit-music/'},
	{ name: 'YouTube Submission', href: '/youtube-submission/'},
	{ name: 'Blog', href: '/blog/'},
];

  return (
	<>
		<div className="flex flex-col md:flex-row items-center">
			{links.map((link) => {
				return (
				<Link
					key={link.name}
					href={link.href}
					className={clsx(
					'inline-block mx-4 py-1 text-center font-bold text-md md:text-lg lg:text-2xl',
					{
						'border-b-4 border-purple-light': pathname === link.href,
					},
					)}
				>
					{link.name}
				</Link>
				);
			})}
		</div>
	</>
  );
}