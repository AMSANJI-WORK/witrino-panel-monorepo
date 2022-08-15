import WProjectBlueIcon from "@shared/components/Icons/WProjectBlue.vue";
import WProjectGreenIcon from "@shared/components/Icons/WProjectGreen.vue";
import WProjectRedIcon from "@shared/components/Icons/WProjectRed.vue";
import WProjectYellowIcon from "@shared/components/Icons/WProjectYellow.vue";
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
