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
    ...mapGetters("tender", { dataSource: "item" }),
    isDataSourceUpdated() {
      return this.dataSource.data;
    },
    isRouteEdit() {
      return this.$route.path.includes("edit");
    },
  },
  methods: {
    ...mapMutations("tender", { changeStep: "CHANGE_STEP" }),
    isEditPage() {
      this.isRouteEdit ? this.setData() : "";
    },
  },
  created() {
    this.isEditPage();
  },
};
export default TenderStepperMixin;
