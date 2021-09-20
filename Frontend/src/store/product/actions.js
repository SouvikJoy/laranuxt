export default {
  async getProducts ({ commit }) {
    const data = await this.$axios.$get('http://api.morgandesign.style/api/products');
    console.log(data);
    await commit('SET_PRODUCT', data);
  }
};
