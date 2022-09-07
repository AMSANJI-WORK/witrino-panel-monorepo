import { createNamespacedHelpers, mapState } from "vuex";
const { mapMutations, mapGetters } = createNamespacedHelpers("guilds/tender");
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
    ...mapGetters({ dataSource: "tender" }),
    ...mapState({
      formLoading: (state) => state.formLoading,
      formLoading: (state) => state.formLoading,
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
  created() {
    this.isEditPage();
  },
};
export default TenderStepperMixin;
