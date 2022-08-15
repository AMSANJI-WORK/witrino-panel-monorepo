import WProjectBlueIcon from "@applets/admin/src/components/Icons/WProjectBlue.vue";
import WProjectGreenIcon from "@applets/admin/src/components/Icons/WProjectGreen.vue";
import WProjectYellowIcon from "@applets/admin/src/components/Icons/WProjectYellow.vue";
export default [
  {
    number: 1,
    title: "فروش روزانه",
    present: 25,
    icon: WProjectBlueIcon,
  },
  {
    number: 2,
    title: "فروش ماهانه",
    present: 10,
    icon: WProjectYellowIcon,
  },
  {
    number: 3,
    title: "فروش سالانه",
    present: -10,
    icon: WProjectGreenIcon,
  },
];
