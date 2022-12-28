import { createNamespacedHelpers } from "vuex";
const { mapMutations } = createNamespacedHelpers("admin/plan");
const StepperMixin = {
  watch: {},
  computed: {
    routeContainEdit() {
      return this.$route.path.includes("edit");
    },
  },
  methods: {
    ...mapMutations({ changeStep: "CHANGE_STEP" }),
  },
};
export default StepperMixin;
