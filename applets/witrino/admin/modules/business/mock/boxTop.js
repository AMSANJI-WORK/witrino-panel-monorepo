import AllBusiness from "@applets/commen/icons/components/AllBusiness.vue";
import ActiveBusiness from "@applets/commen/icons/components/ActiveBusiness.vue";
import DisableBusiness from "@applets/commen/icons/components/DisableBusiness.vue";
export default [
  {
    number: 1,
    title: "همه کسب و کار ها",
    percent: 25,
    icon: AllBusiness,
  },
  {
    number: 2,
    title: "کسب و کار ها فعال",
    percent: 10,
    icon: ActiveBusiness,
  },
  {
    number: 3,
    title: "کسب و کار ها غیرفعال",
    percent: -10,
    icon: DisableBusiness,
  },
];
