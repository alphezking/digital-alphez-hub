# WordPress Headless Integration Guide

This React app is now configured to work as a headless WordPress frontend. Follow these steps to complete the integration:

## 1. WordPress Setup

### Install Required WordPress Plugins:
1. **Enable WordPress REST API** (built-in, just verify it's active)
2. **Install "WP REST API – Better Featured Images"** (optional, for better image support)
3. **Configure CORS** (if WordPress is on different domain)

### Enable CORS in WordPress (if needed):
Add this to your WordPress theme's `functions.php`:

```php
add_action('rest_api_init', function() {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', function($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Allow-Headers: Authorization, Content-Type');
        return $value;
    });
}, 15);
```

## 2. React App Configuration

### Create Environment File:
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your WordPress URL:
   ```
   VITE_WORDPRESS_URL=https://your-wordpress-site.com
   ```

### Update Components:
Replace static components with dynamic ones in `src/pages/Index.tsx`:

```tsx
// Import dynamic component
import BlogDynamic from "@/components/BlogDynamic";

// Replace <Blog /> with:
<BlogDynamic />
```

## 3. WordPress Content Structure

### Create Custom Fields (Optional):
For services, portfolio, and team sections, you can use:
- **Advanced Custom Fields (ACF)** plugin
- **Custom Post Types UI** plugin

### Recommended Custom Post Types:
1. **Services** - for your services section
2. **Portfolio** - for portfolio items
3. **Team Members** - for team section
4. **Testimonials** - for testimonials

## 4. API Endpoints Available

The integration uses these WordPress REST API endpoints:

- **Posts**: `/wp-json/wp/v2/posts`
- **Pages**: `/wp-json/wp/v2/pages`
- **Media**: `/wp-json/wp/v2/media`
- **Custom Post Types**: `/wp-json/wp/v2/{post_type}`

## 5. Testing the Integration

1. **Test WordPress API directly:**
   ```
   https://your-wordpress-site.com/wp-json/wp/v2/posts
   ```

2. **Start your React app:**
   ```bash
   npm run dev
   ```

3. **Check browser console** for any API errors

## 6. Next Steps

### Convert More Components:
I've created a dynamic Blog component. You can create similar components for:
- **Portfolio** (using custom post type)
- **Team Members** (using custom post type)
- **Testimonials** (using custom post type)
- **Services** (using pages or custom post type)

### Example: Create Portfolio Dynamic Component:
```tsx
// Similar to BlogDynamic.tsx
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/lib/wordpress";

const PortfolioDynamic = () => {
  const { data: projects } = useQuery({
    queryKey: ['portfolio'],
    queryFn: () => fetchPosts({ 
      per_page: 6,
      categories: 'portfolio' // or use custom post type
    }),
  });
  // ... render logic
};
```

## 7. WordPress Content Setup Checklist

- [ ] Install WordPress on your server
- [ ] Enable REST API
- [ ] Configure CORS (if needed)
- [ ] Create sample blog posts
- [ ] Add featured images to posts
- [ ] Create custom post types (services, portfolio, team)
- [ ] Update `.env` file with WordPress URL
- [ ] Test API endpoints
- [ ] Replace static components with dynamic ones

## 8. Deployment

### Build the React app:
```bash
npm run build
```

### Deploy Options:
- **Netlify**: Connect GitHub repo, set env variables
- **Vercel**: Connect GitHub repo, set env variables
- **Static hosting**: Upload `dist` folder, configure env on server

### Set Environment Variables:
Make sure to set `VITE_WORDPRESS_URL` in your hosting platform's environment variables.

## Support

For issues or questions:
- Check WordPress REST API documentation
- Verify CORS settings
- Check browser console for errors
- Ensure WordPress site is accessible

## Additional Resources

- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [ACF Documentation](https://www.advancedcustomfields.com/resources/)
- [Custom Post Types UI](https://wordpress.org/plugins/custom-post-type-ui/)
