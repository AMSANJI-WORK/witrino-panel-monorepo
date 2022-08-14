import { mapGetters } from "vuex";
// import router from "@witrino/router";
const RolePaginationMixin = {
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
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters("admin/role/pagination", [
      "pagination",
      "currentPage",
      "totalPages",
      "perPage",
      "total",
    ]),
  },
  methods: {},
};
export default RolePaginationMixin;
