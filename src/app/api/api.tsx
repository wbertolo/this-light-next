const API_URL = process.env.GRAPHQL_ENDPOINT;

export async function fetchAPI(
	query = "",
	{ variables }: Record<string, any> = {}
  ) {
	const headers = { "Content-Type": "application/json" };
  
	const res = await fetch(API_URL, {
	  headers,
	  method: "POST",
	  body: JSON.stringify({
		query,
		variables,
	  }),
	});
  
	const json = await res.json();
  
	if (json.errors) {
	  console.error(json.errors);
	  throw new Error("Failed to fetch API");
	}
	return json.data;
  }


export async function getPageBySlug(slug: string) {

	const data = await fetchAPI(
	  `query Page {
		page(id: "${slug}", idType: URI) {
		  id,
		  slug,
		  title,
		  content
		}
	  }`,
	  {
		variables: {},
	  }
	);
  
	return data?.page;
}


export async function getPostBySlug(slug: string) {

	const data = await fetchAPI(
	  `query Post {
		post(id: "${slug}", idType: SLUG) {
		  id,
		  slug,
		  title,
		  content
		}
	  }`,
	  {
		variables: {},
	  }
	);
  
	return data?.post;
}


export async function getPosts(qty: number) {

	const data = await fetchAPI(
	  `query FetchPosts {
		  posts(first: ${qty}) {
			nodes {
				slug
				title
				excerpt
				content
				uri
				featuredImage {
					node {
						id
						sourceUrl
					}
				}
			}
		  }
		}`,
	  {
		variables: {},
	  }
	);
  
	return data?.posts.nodes;
}


export async function getAllPosts() {

	const data = await fetchAPI(
	  `query FetchAllPosts {
		  posts(first: 1000) {
			nodes {
				slug
				title
				excerpt
				content
				uri
				featuredImage {
					node {
						id
						sourceUrl
					}
				}
			}
		  }
		}`,
	  {
		variables: {},
		next: { revalidate: 3600 },
	  }
	);
  
	return data?.posts.nodes;
}


export async function getAllPages() {

	const data = await fetchAPI(
	  `query FetchAllPages {
		  pages(first: 1000) {
			nodes {
				slug
				title
				content
				uri
				featuredImage {
					node {
						id
						sourceUrl
					}
				}
			}
		  }
		}`,
	  {
		variables: {},
		next: { revalidate: 3600 },
	  }
	);
  
	return data?.pages.nodes;
}

// export async function getPrimaryNavigation() {

// 	const data = await fetchAPI(
// 	  `query primaryNav {
// 		menu(id: "primary", idType: LOCATION) {
// 		  id
// 		  menuItems {
// 			edges {
// 			  node {
// 				path
// 				target
// 				title
// 				id
// 				description
// 				label
// 			  }
// 			}
// 		  }
// 		}
// 	  }`
// 	);
  
// 	return data?.menu.menuItems.edges;
// }
