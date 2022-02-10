module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/image-uploader/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/assets/style.scss";',
      },
    },
  },
};
