import { createNamespacedHelpers, mapState } from "vuex";
const { mapMutations, mapGetters } = createNamespacedHelpers("guilds/auction");
const TenderStepperMixin = {
  watch: {
    isDataSourceUpdated: {
      handler(newValue) {
        if (newValue !== undefined) {
          this.isEditPage();
        }
      },
      immediate: true,
    },
  },
  computed: {
    ...mapGetters({ dataSource: "auction" }),
    ...mapState({
      fromLoading: (state) => state.fromLoading,
      submitBtnLoading: (state) => state.submitBtnLoading,
    }),
    isDataSourceUpdated() {
      return this.dataSource.data;
    },
    isRouteEdit() {
      return this.$route.path.includes("edit");
    },
  },
  methods: {
    ...mapMutations({ changeStep: "CHANGE_STEP" }),
    isEditPage() {
      this.isRouteEdit ? this.setData() : "";
    },
  },
};
export default TenderStepperMixin;
