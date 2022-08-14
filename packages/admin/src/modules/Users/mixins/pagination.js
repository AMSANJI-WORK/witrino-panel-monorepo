import { mapGetters } from "vuex";
// import router from "@witrino/router";
const UserPaginationMixin = {
  data: () => ({
    paginationEditable: {
      currentPage: null,
      perPage: null,
      total: null,
      totalPages: null,
    },
  }),
  watch: {
    pagination(newValue) {
      console.log(newValue);
    //   Object.assign(this.paginationEditable, newValue);
    },
    paginationEditable: {
      handler(newValue) {
        console.log(newValue);
        //   const { currentRoute } = router;
        //   router.replace({
        //     path: currentRoute.path,
        //     query: { ...newValue },
        //   });
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters("admin/user/pagination", [
      "pagination",
      "currentPage",
      "totalPages",
      "perPage",
      "total",
    ]),
  },
  methods: {},
};
export default UserPaginationMixin;
