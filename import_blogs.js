const { createClient, ApiKeyStrategy } = require('@wix/sdk');
const { draftPosts } = require('@wix/blog');
const fs = require('fs');

async function importBlogs() {
  console.log("Reading exported blogs...");
  const rawData = fs.readFileSync('wix_blogs_export.json');
  const blogs = JSON.parse(rawData);
  
  if (blogs.length === 0) {
    console.log("No blogs to import.");
    return;
  }

  console.log("Connecting to NEW Wix headless site with API Key...");
  const newWixClient = createClient({
    modules: { draftPosts },
    auth: ApiKeyStrategy({ 
      apiKey: 'IST.eyJraWQiOiJQb3pIX2FDMiIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1wiaWRcIjpcIjRiMDcyNWExLTNkODktNDFhZi1iM2MzLWJmN2EyZWQ4YWVhOFwiLFwiaWRlbnRpdHlcIjp7XCJ0eXBlXCI6XCJhcHBsaWNhdGlvblwiLFwiaWRcIjpcImUzODk3ZjY4LTZiYWMtNDNkOC1hN2ExLTM0YWNmZTFlNjAxOFwifSxcInRlbmFudFwiOntcInR5cGVcIjpcImFjY291bnRcIixcImlkXCI6XCI2NTc3ODIzMy1kZWMxLTQxZGEtOTU3YS1lM2Q0NTk4MjdjMjFcIn19IiwiaWF0IjoxNzg2NTM5MDg4fQ.OUrNKFOhH-0oYleCuvRie_8kOkPOcdzCXPW6A1FclHpxkMze200MZ21WWyQNd-C-PeGdl-O7Ehs9jk92YJdqFZ9WNYmQYXnI9yKRqqHF71mVv9uJqG5htBYdgQ9VcXkPbcwvf-V-o6F2SDeHjJk-eMrfICWZkwQM1QFigv1h5pKVoYdSEcOMkXzquV4Atou9XYY2WnKD4SyhHYp5d04_egv500YVnPbQfzY8bZycMWXXk_1XUlvuoNiJ6qL4GSTAsfHTE2SlZ5RFu27mMH0s6jlk4Gd_7jFrfbq9wnmfsNU8H_C48G9haI75LSq08_cY49le1wNTF2iHLKAbNzyiNg',
      accountId: '65778233-dec1-41da-957a-e3d459827c21'
    })
  });

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < blogs.length; i++) {
    const post = blogs[i];
    console.log(`[${i+1}/${blogs.length}] Uploading: "${post.title}"...`);
    
    try {
      await newWixClient.draftPosts.createDraftPost({
        draftPost: {
          title: post.title,
          richContent: post.richContent,
        },
        publish: true 
      });
      successCount++;
    } catch (error) {
      console.error(`  -> Failed: ${error.message}`);
      failCount++;
    }
    
    // Add a tiny delay to not rate limit the API
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log(`\nImport complete! Successfully imported ${successCount} blogs. Failed: ${failCount}.`);
}

importBlogs();
