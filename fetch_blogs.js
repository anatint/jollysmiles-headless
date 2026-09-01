const { createClient, OAuthStrategy } = require('@wix/sdk');
const { posts } = require('@wix/blog');
const fs = require('fs');

async function fetchBlogs() {
  console.log("Connecting to old Wix site...");
  const wixClient = createClient({
    modules: { posts },
    auth: OAuthStrategy({ clientId: 'a846e95e-cea3-40bf-81c0-4e44d74f94c4' })
  });

  try {
    const result = await wixClient.posts.listPosts({
      paging: { limit: 100, offset: 0 },
      fieldsets: ['RICH_CONTENT']
    });
    
    console.log(`Fetched ${result.posts.length} posts!`);
    
    fs.writeFileSync('wix_blogs_export.json', JSON.stringify(result.posts, null, 2));
    console.log("Successfully saved all blogs to wix_blogs_export.json");
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

fetchBlogs();
