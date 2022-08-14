import AllUnions from "@shared/components/Icons/AllUnions.vue";
import ActiveUnions from "@shared/components/Icons/ActiveUnions.vue";
import DisableUnions from "@shared/components/Icons/DisableUnions.vue";
export default [
  {
    number: 1,
    title: "همه اتحادیه ها",
    present: 25,
    icon: AllUnions,
  },
  {
    number: 2,
    title: "اتحادیه ها فعال",
    present: 10,
    icon: ActiveUnions,
  },
  {
    number: 3,
    title: "اتحادیه ها غیرفعال",
    present: -10,
    icon: DisableUnions,
  },
];
