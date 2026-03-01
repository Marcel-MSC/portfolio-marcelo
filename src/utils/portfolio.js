/**
 * Normalize malformed profile URLs from the API (e.g. LinkedIn with duplicated URL in path).
 * @param {Object} portfolio - API response object (mutated in place)
 * @returns {Object} the same portfolio reference
 */
export function normalizeProfileUrls(portfolio) {
  const profiles = portfolio?.basics?.profiles;
  if (!Array.isArray(profiles)) return portfolio;

  for (const profile of profiles) {
    if (!profile?.url) continue;
    let url = profile.url;

    if (profile.network === 'LinkedIn') {
      // Fix duplicated URL: e.g. "https://linkedin.com/in/https://www.linkedin.com/in/marcelomsc/"
      const innerMatch = url.match(/linkedin\.com\/in\/(https:\/\/[^/]+\/in\/[^/]+\/?)/i);
      if (innerMatch) {
        profile.url = innerMatch[1].replace(/\/$/, '') + '/';
        continue;
      }
      // If username looks like a profile path, build canonical URL
      if (profile.username && !url.includes('linkedin.com/in/')) {
        const slug = profile.username.replace(/^.*\/in\//i, '').replace(/\/?$/, '');
        if (slug) profile.url = `https://www.linkedin.com/in/${slug}/`;
      }
    }
  }

  return portfolio;
}
