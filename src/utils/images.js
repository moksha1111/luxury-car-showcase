/**
 * Returns an Unsplash CDN URL for a given photo ID
 * @param {string} id - Unsplash photo ID
 * @param {number} width - Desired image width
 * @param {number} quality - Image quality (1-100)
 */
export function unsplashUrl(id, width = 1200, quality = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=${quality}`;
}
