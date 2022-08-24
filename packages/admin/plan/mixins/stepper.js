import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapGetters } = createNamespacedHelpers("admin/plan");
const TenderStepperMixin = {
  watch: {
    plan: {
      handler(newValue) {
        if (newValue !== undefined) {
          this.isEditPage();
        }
      },
      immediate: true,
    },
  },
  computed: {
    ...mapGetters(["plan"]),
    routeContainEdit() {
      return this.$route.path.includes("edit");
    },
  },
  methods: {
    ...mapMutations({ changeStep: "CHANGE_STEP" }),
  },
  created() {
    if (this.routeContainEdit) this.setData();
  },
};
export default TenderStepperMixin;
