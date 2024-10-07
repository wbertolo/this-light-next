import { getAllPages, getPosts } from './../api/api';

export async function generateStaticParams() {
	const pages = await getAllPages();
	return pages.map((page: any) => ({
		slug: page.slug,
	}))
}

export default async function Blog({ params }: { params: { slug: string } }) {
	const posts = await getPosts(5);
	const cards = posts.map((post:any) => 
		`
		<div class="post-card bg-blue-dark text-white p-4 mb-10 overflow-hidden border border-slate-500">
			<h2 class="text-white mt-0"><a href="${post.uri}">${post.title}</a></h2>
			<img src="${post.featuredImage.node.sourceUrl}" />
			<p><a class="no-underline text-white" href="${post.uri}">${post.excerpt}</a></p>
		</div>
		`
	).join(" ");

  return (
    <>
      <h1>Blog</h1>
      <div dangerouslySetInnerHTML={{ __html: cards }} />
    </>
  );
}

