// WordPress API Configuration
export const WORDPRESS_URL = import.meta.env.VITE_WORDPRESS_URL || 'https://your-wordpress-site.com';
export const WP_API_URL = `${WORDPRESS_URL}/wp-json/wp/v2`;

// WordPress API Types
export interface WPPost {
  id: number;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  author: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
      avatar_urls: { [key: string]: string };
    }>;
  };
}

export interface WPPage {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

export interface WPMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
  };
}

// Fetch WordPress posts
export async function fetchPosts(params?: {
  per_page?: number;
  page?: number;
  categories?: string;
  search?: string;
}) {
  try {
    const queryParams = new URLSearchParams({
      _embed: 'true',
      per_page: String(params?.per_page || 10),
      page: String(params?.page || 1),
      ...(params?.categories && { categories: params.categories }),
      ...(params?.search && { search: params.search }),
    });

    const response = await fetch(`${WP_API_URL}/posts?${queryParams}`);
    if (!response.ok) throw new Error('Failed to fetch posts');
    
    const posts: WPPost[] = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return [];
  }
}

// Fetch single post by slug
export async function fetchPostBySlug(slug: string) {
  try {
    const response = await fetch(`${WP_API_URL}/posts?slug=${slug}&_embed=true`);
    if (!response.ok) throw new Error('Failed to fetch post');
    
    const posts: WPPost[] = await response.json();
    return posts[0] || null;
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
}

// Fetch WordPress pages
export async function fetchPages(params?: {
  per_page?: number;
  page?: number;
  search?: string;
}) {
  try {
    const queryParams = new URLSearchParams({
      _embed: 'true',
      per_page: String(params?.per_page || 10),
      page: String(params?.page || 1),
      ...(params?.search && { search: params.search }),
    });

    const response = await fetch(`${WP_API_URL}/pages?${queryParams}`);
    if (!response.ok) throw new Error('Failed to fetch pages');
    
    const pages: WPPage[] = await response.json();
    return pages;
  } catch (error) {
    console.error('Error fetching WordPress pages:', error);
    return [];
  }
}

// Fetch page by slug
export async function fetchPageBySlug(slug: string) {
  try {
    const response = await fetch(`${WP_API_URL}/pages?slug=${slug}&_embed=true`);
    if (!response.ok) throw new Error('Failed to fetch page');
    
    const pages: WPPage[] = await response.json();
    return pages[0] || null;
  } catch (error) {
    console.error('Error fetching WordPress page:', error);
    return null;
  }
}

// Fetch media by ID
export async function fetchMedia(mediaId: number) {
  try {
    const response = await fetch(`${WP_API_URL}/media/${mediaId}`);
    if (!response.ok) throw new Error('Failed to fetch media');
    
    const media: WPMedia = await response.json();
    return media;
  } catch (error) {
    console.error('Error fetching WordPress media:', error);
    return null;
  }
}

// Helper to strip HTML tags from content
export function stripHtml(html: string): string {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

// Helper to get featured image URL
export function getFeaturedImageUrl(post: WPPost | WPPage, fallback: string = '/placeholder.svg'): string {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || fallback;
}

// Helper to get author name
export function getAuthorName(post: WPPost, fallback: string = 'Anonymous'): string {
  return post._embedded?.author?.[0]?.name || fallback;
}
