import AllBusiness from "@commen/icons/components/AllBusiness.vue";
import ActiveBusiness from "@commen/icons/components/ActiveBusiness.vue";
import DisableBusiness from "@commen/icons/components/DisableBusiness.vue";
export default [
  {
    number: 1,
    title: "همه کسب و کار ها",
    present: 25,
    icon: AllBusiness,
  },
  {
    number: 2,
    title: "کسب و کار ها فعال",
    present: 10,
    icon: ActiveBusiness,
  },
  {
    number: 3,
    title: "کسب و کار ها غیرفعال",
    present: -10,
    icon: DisableBusiness,
  },
];
