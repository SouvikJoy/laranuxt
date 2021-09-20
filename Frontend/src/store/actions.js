export default {
  async nuxtServerInit ({ dispatch }) {
    await dispatch('product/getProducts');
  }
};
