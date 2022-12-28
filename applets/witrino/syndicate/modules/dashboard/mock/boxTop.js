import WProjectBlueIcon from "@applets/commen/icons/components/WProjectBlue.vue";
import WProjectGreenIcon from "@applets/commen/icons/components/WProjectGreen.vue";
import WProjectRedIcon from "@applets/commen/icons/components/WProjectRed.vue";
import WProjectYellowIcon from "@applets/commen/icons/components/WProjectYellow.vue";
export default [
  {
    number: 1,
    title: "شکایات روزانه",
    percent: 25,
    icon: WProjectBlueIcon,
  },
  {
    number: 2,
    title: "تعداد بازرسان",
    percent: 10,
    icon: WProjectYellowIcon,
  },
  {
    number: 3,
    title: "واحد های صنفی",
    percent: -10,
    icon: WProjectGreenIcon,
  },
  {
    number: 4,
    title: "مجوزهای در حال انقضا",
    percent: 0,
    icon: WProjectRedIcon,
  },
];
