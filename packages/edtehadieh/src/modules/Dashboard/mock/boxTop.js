import WProjectBlueIcon from "@shared/components/Icons/WProjectBlue.vue";
import WProjectGreenIcon from "@shared/components/Icons/WProjectGreen.vue";
import WProjectRedIcon from "@shared/components/Icons/WProjectRed.vue";
import WProjectYellowIcon from "@shared/components/Icons/WProjectYellow.vue";
export default [
  {
    number: 1,
    title: "شکایات روزانه",
    present: 25,
    icon: WProjectBlueIcon,
  },
  {
    number: 2,
    title: "تعداد بازرسان",
    present: 10,
    icon: WProjectYellowIcon,
  },
  {
    number: 3,
    title: "واحد های صنفی",
    present: -10,
    icon: WProjectGreenIcon,
  },
  {
    number: 4,
    title: "مجوزهای در حال انقضا",
    present: 0,
    icon: WProjectRedIcon,
  },
];
