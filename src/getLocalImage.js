/*To retrieve dynamic layout image paths in src folder
- desktop
- tablet
- mobile
*/

const getLocalImage = (path) => {
  const img = require(`./assets/${path}`).default;
  return img;
};

export default getLocalImage;
