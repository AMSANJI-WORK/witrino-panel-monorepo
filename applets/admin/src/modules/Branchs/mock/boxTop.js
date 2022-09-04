import AllBranch from "@commen/icons/components/AllBranch.vue";
import ActiveBranch from "@commen/icons/components/ActiveBranch.vue";
import OutDateBranch from "@commen/icons/components/OutDateBranch.vue";
import DisableBranch from "@commen/icons/components/DeActiveBranch.vue";
export default [
  {
    number: 1,
    title: "همه نمایندگی ها",
    present: 25,
    icon: AllBranch,
  },
  {
    number: 2,
    title: "نمایندگی های فعال",
    present: 10,
    icon: ActiveBranch,
  },
  {
    number: 3,
    title: "نمایندگی های در حال انقضاء",
    present: -10,
    icon: OutDateBranch,
  },
  {
    number: 4,
    title: "نمایندگی هی غیر فعال",
    present: -10,
    icon: DisableBranch,
  },
];
