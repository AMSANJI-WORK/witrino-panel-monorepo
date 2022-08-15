import { mapGetters } from "vuex";
import Cookies from "js-cookie";
const TableMixin = {
  data: () => ({
    editedId: -1,
  }),
  computed: {
    ...mapGetters("shared/loading", ["tableLoading"]),
    currentUserId() {
      return Cookies.get("userId") ?? null;
    },
  },
  methods: {
    tableHeader(headerDataTableClass) {
      let [rowOne, ...rows] = this.headers;
      rowOne = {
        ...rowOne,
        class: `${headerDataTableClass} rounded-tr-lg`,
      };
      rows = rows.map((item) => ({
        ...item,
        class: headerDataTableClass,
      }));
      rows[rows.length - 1].class += " rounded-tl-lg";
      return [rowOne, ...rows];
    },
  },
};

export default TableMixin;
