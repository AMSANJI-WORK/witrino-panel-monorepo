import AllBusiness from "@shared/components/Icons/AllBusiness.vue";
import ActiveBusiness from "@shared/components/Icons/ActiveBusiness.vue";
import DisableBusiness from "@shared/components/Icons/DisableBusiness.vue";
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
