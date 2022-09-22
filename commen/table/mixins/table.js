import Cookies from "js-cookie";
const mixinTable = {
  data: () => ({
    editedId: -1,
  }),
  computed: {
    currentUserId() {
      return JSON.parse(localStorage.getItem("userId")) ?? null;
    },
  },
  methods: {
    tableHeader(dataTableClassHeader) {
      let [rowOne, ...rows] = this.headers;
      rowOne = {
        ...rowOne,
        class: `${dataTableClassHeader} rounded-tr-lg`,
      };
      rows = rows.map((item) => ({
        ...item,
        class: dataTableClassHeader,
      }));
      rows[rows.length - 1].class += " rounded-tl-lg";
      return [rowOne, ...rows];
    },
  },
};

export default mixinTable;
