import AllUsers from "@shared/components/Icons/AllUsers.vue";
import ActiveUsers from "@shared/components/Icons/ActiveUsers.vue";
import DisableUsers from "@shared/components/Icons/DisableUsers.vue";
export default [
  {
    number: 1,
    title: "همه کاربران",
    present: 25,
    icon: AllUsers,
  },
  {
    number: 2,
    title: "کاربران فعال",
    present: 10,
    icon: ActiveUsers,
  },
  {
    number: 3,
    title: "کاربران غیرفعال",
    present: -10,
    icon: DisableUsers,
  },
];
