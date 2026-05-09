export default async function handler(req, res) {
  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const key = process.env.YOUTUBE_API_KEY;
  if (!key) {
    return res.status(500).json({ error: 'API key not configured on server.' });
  }

  const { endpoint, params } = req.query;

  // Whitelist allowed endpoints — nothing else can be called
  const allowedEndpoints = ['playlistItems', 'playlists'];
  if (!allowedEndpoints.includes(endpoint)) {
    return res.status(400).json({ error: 'Invalid endpoint' });
  }

  let parsedParams = {};
  try {
    parsedParams = params ? JSON.parse(params) : {};
  } catch (e) {
    return res.status(400).json({ error: 'Invalid params' });
  }

  // Build the YouTube API URL
  const ytUrl = new URL(`https://www.googleapis.com/youtube/v3/${endpoint}`);
  ytUrl.searchParams.set('key', key);
  for (const [k, v] of Object.entries(parsedParams)) {
    ytUrl.searchParams.set(k, v);
  }

  try {
    const response = await fetch(ytUrl.toString());
    const data = await response.json();
    // Pass response status through
    return res.status(response.status).json(data);
  } catch (e) {
    return res.status(500).json({ error: 'Failed to reach YouTube API' });
  }
}
