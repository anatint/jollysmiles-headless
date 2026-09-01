const https = require('https');

const apiKey = 'IST.eyJraWQiOiJQb3pIX2FDMiIsImFsZyI6IlJTMjU2In0.eyJkYXRhIjoie1wiaWRcIjpcIjRiMDcyNWExLTNkODktNDFhZi1iM2MzLWJmN2EyZWQ4YWVhOFwiLFwiaWRlbnRpdHlcIjp7XCJ0eXBlXCI6XCJhcHBsaWNhdGlvblwiLFwiaWRcIjpcImUzODk3ZjY4LTZiYWMtNDNkOC1hN2ExLTM0YWNmZTFlNjAxOFwifSxcInRlbmFudFwiOntcInR5cGVcIjpcImFjY291bnRcIixcImlkXCI6XCI2NTc3ODIzMy1kZWMxLTQxZGEtOTU3YS1lM2Q0NTk4MjdjMjFcIn19IiwiaWF0IjoxNzg2NTM5MDg4fQ.OUrNKFOhH-0oYleCuvRie_8kOkPOcdzCXPW6A1FclHpxkMze200MZ21WWyQNd-C-PeGdl-O7Ehs9jk92YJdqFZ9WNYmQYXnI9yKRqqHF71mVv9uJqG5htBYdgQ9VcXkPbcwvf-V-o6F2SDeHjJk-eMrfICWZkwQM1QFigv1h5pKVoYdSEcOMkXzquV4Atou9XYY2WnKD4SyhHYp5d04_egv500YVnPbQfzY8bZycMWXXk_1XUlvuoNiJ6qL4GSTAsfHTE2SlZ5RFu27mMH0s6jlk4Gd_7jFrfbq9wnmfsNU8H_C48G9haI75LSq08_cY49le1wNTF2iHLKAbNzyiNg';
const accountId = '65778233-dec1-41da-957a-e3d459827c21';

const options = {
  hostname: 'www.wixapis.com',
  path: '/site-management/v1/sites',
  method: 'GET',
  headers: {
    'Authorization': apiKey,
    'Content-Type': 'application/json',
    'wix-account-id': accountId
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      console.log("Sites found:", JSON.stringify(json, null, 2));
    } catch (e) {
      console.log("Raw response:", data);
    }
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
