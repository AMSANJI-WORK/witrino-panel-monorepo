import WProjectBlueIcon from "@applets/witrino/admin/src/components/Icons/WProjectBlue.vue";
import WProjectGreenIcon from "@applets/witrino/admin/src/components/Icons/WProjectGreen.vue";
import WProjectYellowIcon from "@applets/witrino/admin/src/components/Icons/WProjectYellow.vue";
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
