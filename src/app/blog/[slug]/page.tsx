import { getAllPosts, getPostBySlug } from '../../api/api';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: any) => ({
    slug: post.slug,
  }))
}
 

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  return (
    <div className="post bg-slate-300 p-10 text-black">
      <h1>{post && post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: [post && post.content] }}></div>
    </div>
  );
}
