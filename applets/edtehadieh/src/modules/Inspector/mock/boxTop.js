import WProjectBlueIcon from "@commen/icons/components/WProjectBlue.vue";
import WProjectGreenIcon from "@commen/icons/components/WProjectGreen.vue";
import WProjectRedIcon from "@commen/icons/components/WProjectRed.vue";
import WProjectYellowIcon from "@commen/icons/components/WProjectYellow.vue";
export default [
  {
    number: 1,
    title: "همه بازرسان",
    present: 25,
    icon: WProjectBlueIcon,
  },
  {
    number: 2,
    title: "بازرسان فعال",
    present: -10,
    icon: WProjectGreenIcon,
  },
  {
    number: 3,
    title: "بازرسان برتر",
    present: 10,
    icon: WProjectYellowIcon,
  },
  {
    number: 4,
    title: "مجوزهای در حال انقضا",
    present: 0,
    icon: WProjectRedIcon,
  },
];
