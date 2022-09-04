import AllUnions from "@commen/icons/components/AllUnions.vue";
import ActiveUnions from "@commen/icons/components/ActiveUnions.vue";
import DisableUnions from "@commen/icons/components/DisableUnions.vue";
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
