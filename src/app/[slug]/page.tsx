import { getAllPages, getPageBySlug } from './../api/api';

export async function generateStaticParams() {
	const pages = await getAllPages();
	return pages.map((page: any) => ({
		slug: page.slug,
	}))
}


export default async function Page({ params }: { params: { slug: string } }) {
	const page = await getPageBySlug(params.slug);
	return (
		<>
			<h1>{page && page.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: [page && page.content] }}></div>
		</>
	);
}

