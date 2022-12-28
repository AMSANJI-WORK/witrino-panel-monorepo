import WProjectBlueIcon from "@applets/commen/icons/components/WProjectBlue.vue";
import WProjectGreenIcon from "@applets/commen/icons/components/WProjectGreen.vue";
import WProjectYellowIcon from "@applets/commen/icons/components/WProjectYellow.vue";
export default [
  {
    number: 1,
    title: "فروش روزانه",
    percent: 25,
    icon: WProjectBlueIcon,
  },
  {
    number: 2,
    title: "فروش ماهانه",
    percent: 10,
    icon: WProjectYellowIcon,
  },
  {
    number: 3,
    title: "فروش سالانه",
    percent: -10,
    icon: WProjectGreenIcon,
  },
];
