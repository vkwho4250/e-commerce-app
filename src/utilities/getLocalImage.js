/*To retrieve image paths in src folder for:
- desktop
- tablet
- mobile
*/

const getLocalImage = (path) => {
  const img = require(`./assets/${path}`).default;
  return img;
};

export default getLocalImage;
