let PostCssPackage;
try {
  const postcss = require('postcss');
  const cssjs = require('postcss-js');
  PostCssPackage = {
    postcss,
    cssjs
  };
} catch (error) {}
export default PostCssPackage;