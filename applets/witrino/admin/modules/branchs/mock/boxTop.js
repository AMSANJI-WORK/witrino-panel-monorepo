import AllBranch from "@applets/commen/icons/components/AllBranch.vue";
import ActiveBranch from "@applets/commen/icons/components/ActiveBranch.vue";
import OutDateBranch from "@applets/commen/icons/components/OutDateBranch.vue";
import DisableBranch from "@applets/commen/icons/components/DeActiveBranch.vue";
export default [
  {
    number: 1,
    title: "همه نمایندگی ها",
    percent: 25,
    icon: AllBranch,
  },
  {
    number: 2,
    title: "نمایندگی های فعال",
    percent: 10,
    icon: ActiveBranch,
  },
  {
    number: 3,
    title: "نمایندگی های در حال انقضاء",
    percent: -10,
    icon: OutDateBranch,
  },
  {
    number: 4,
    title: "نمایندگی هی غیر فعال",
    percent: -10,
    icon: DisableBranch,
  },
];
