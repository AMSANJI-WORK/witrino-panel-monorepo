import AllBranch from "@applets/commen/icons/components/AllBranch.vue";
import ActiveBranch from "@applets/commen/icons/components/ActiveBranch.vue";
import OutDateBranch from "@applets/commen/icons/components/OutDateBranch.vue";
export default [
  {
    number: 1,
    title: "همه محصولات",
    percent: 25,
    icon: AllBranch,
  },
  {
    number: 2,
    title: "نمایندگی های فعال",
    percent: 10,
    icon: OutDateBranch,
  },
  {
    number: 3,
    title: "محصولات برتر",
    percent: -10,
    icon: ActiveBranch,
  },
];
