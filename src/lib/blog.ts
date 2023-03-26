import { getCollection } from "astro:content"

export interface Blog {
    title: string;
    tags: string[];
    date: string;
    slug: string;
    body: string;
}

export async function getAllBlogs(): Promise<Blog[]> {
    const blogs = await getCollection("blog");
    return blogs
      .map((blog) => ({ ...blog.data, slug: blog.slug, body: blog.body}))
        .sort(
            (a, z) =>
            new Date(z.date).getMilliseconds() - new Date(a.date).getMilliseconds()
        );
}
