import Image from 'next/image';
import Link from 'next/link';
import TopNav from './top-nav';

export default function Header() {
	return (
		<header className="py-5 px-4 flex flex-col md:flex-row items-center md:items-center">
			<Link title="Home" href="/">
				<Image
					className="mx-auto md:mr-5 mb-5 md:mb-0"
					src="/images/layout/logo.png"
					width={80}
					height={80}
					alt="This Light homepage"
				/>
			</Link>
			<TopNav />
		</header>
	)
  }
  