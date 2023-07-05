// loader for fetching all blog
export async function FetchAllBlog()
{
    const allBlogResponse = await fetch(`http://localhost:3000/blog/`)
    const allBlog = await allBlogResponse.json()
    return allBlog;
}