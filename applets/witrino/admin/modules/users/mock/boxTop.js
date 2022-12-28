import AllUsers from "@applets/commen/icons/components/AllUsers.vue";
import ActiveUsers from "@applets/commen/icons/components/ActiveUsers.vue";
import DisableUsers from "@applets/commen/icons/components/DisableUsers.vue";
export default [
  {
    number: 1,
    title: "همه کاربران",
    percent: 25,
    icon: AllUsers,
  },
  {
    number: 2,
    title: "کاربران فعال",
    percent: 10,
    icon: ActiveUsers,
  },
  {
    number: 3,
    title: "کاربران غیرفعال",
    percent: -10,
    icon: DisableUsers,
  },
];
