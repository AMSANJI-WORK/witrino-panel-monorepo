import { mapGetters } from "vuex";
const loadingFormProduct = {
  computed: {
    ...mapGetters("buisness/product/loading", ["formLoading", "tableLoading"]),
  },
};
export default loadingFormProduct;
