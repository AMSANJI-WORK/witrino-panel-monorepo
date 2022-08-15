import WProjectBlueIcon from "@shared/components/Icons/WProjectBlue.vue";
import WProjectGreenIcon from "@shared/components/Icons/WProjectGreen.vue";
import WProjectRedIcon from "@shared/components/Icons/WProjectRed.vue";
import WProjectYellowIcon from "@shared/components/Icons/WProjectYellow.vue";
export default [
  {
    number: 1,
    title: "فروش روزانه",
    present: 25,
    icon: WProjectBlueIcon,
  },
  {
    number: 2,
    title: "تعداد نماینده ها",
    present: 10,
    icon: WProjectYellowIcon,
  },
  {
    number: 3,
    title: "تعداد محصول",
    present: -10,
    icon: WProjectGreenIcon,
  },
  {
    number: 4,
    title: "پیام خوانده نشده",
    present: 0,
    icon: WProjectRedIcon,
  },
];
