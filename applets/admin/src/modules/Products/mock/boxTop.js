import AllBranch from "@shared/components/Icons/AllBranch.vue";
import ActiveBranch from "@shared/components/Icons/ActiveBranch.vue";
import OutDateBranch from "@shared/components/Icons/OutDateBranch.vue";
export default [
  {
    number: 1,
    title: "همه محصولات",
    present: 25,
    icon: AllBranch,
  },
  {
    number: 2,
    title: "نمایندگی های فعال",
    present: 10,
    icon: OutDateBranch,
  },
  {
    number: 3,
    title: "محصولات برتر",
    present: -10,
    icon: ActiveBranch,
  },
];
