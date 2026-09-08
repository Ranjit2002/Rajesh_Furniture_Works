const isProd = process.env.NODE_ENV === 'production';
export const basePath = isProd ? '/Rajesh_Furniture_Works' : '';

/**
 * Resolves static asset paths for both local development ('')
 * and GitHub Pages production ('/Rajesh_Furniture_Works').
 *
 * @param {string} path - Absolute asset path, e.g. '/img/hall_1.jpg'
 * @returns {string} Fully resolved path
 */
export function getAssetPath(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (basePath && cleanPath.startsWith(basePath)) return cleanPath;
  return `${basePath}${cleanPath}`;
}
