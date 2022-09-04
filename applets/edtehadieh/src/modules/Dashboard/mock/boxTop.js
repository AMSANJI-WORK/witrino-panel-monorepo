import WProjectBlueIcon from "@commen/icons/components/WProjectBlue.vue";
import WProjectGreenIcon from "@commen/icons/components/WProjectGreen.vue";
import WProjectRedIcon from "@commen/icons/components/WProjectRed.vue";
import WProjectYellowIcon from "@commen/icons/components/WProjectYellow.vue";
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
