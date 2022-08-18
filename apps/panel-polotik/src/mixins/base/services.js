import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("guilds/services");
import servicesTypes from "@packages/polotik/Service/store/types";
const ServicesMixin = {
  watch: {
    categories: {
      handler(newValue) {},
      immediate: true,
    },
    cities: {
      handler(newValue) {},
      immediate: true,
    },
    units: {
      handler(newValue) {},
      immediate: true,
    },
  },
  computed: {
    ...mapGetters({
      categories: "category/categories",
      cities: "cities/cities",
      units: "units/units",
    }),
  },
  methods: {
    ...mapActions({
      getAllCategoriesAsync: `category/${servicesTypes.GET_ALL_CATEGORIES_ASYNC}`,
      getAllCitiesAsync: `cities/${servicesTypes.GET_ALL_CITIES_ASYNC}`,
      getAllUnitsAsync: `units/${servicesTypes.GET_ALL_UNITS_ASYNC}`,
    }),
  },
};
export default ServicesMixin;
