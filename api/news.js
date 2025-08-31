// api/news.js
export default async function handler(req, res) {
  const {
    q,
    category,
    country = "us",
    page = "1",
    pageSize = "20",
    endpoint = "top-headlines",
  } = req.query;

  const params = new URLSearchParams({ country, page, pageSize });
  if (q) params.set("q", q);
  if (category) params.set("category", category);

  const url = `https://newsapi.org/v2/${endpoint}?${params.toString()}`;

  try {
    const r = await fetch(url, {
      headers: { "X-Api-Key": process.env.NEWS_API_KEY },
    });
    const data = await r.json();
    res.status(r.ok ? 200 : r.status).json(data);
  } catch (e) {
    res
      .status(500)
      .json({ status: "error", message: e?.message || "Proxy failed" });
  }
}
