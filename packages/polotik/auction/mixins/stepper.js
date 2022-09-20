import { mapMutations, mapGetters } from "vuex";
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
    ...mapGetters("auction", { dataSource: "item" }),
    isDataSourceUpdated() {
      return this.dataSource.data;
    },
    isRouteEdit() {
      return this.$route.path.includes("edit");
    },
  },
  methods: {
    ...mapMutations("auction", { changeStep: "CHANGE_STEP" }),
    isEditPage() {
      this.isRouteEdit ? this.setData() : "";
    },
  },
};
export default TenderStepperMixin;
