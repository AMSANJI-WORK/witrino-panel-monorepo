import WProjectBlueIcon from "@commen/icons/components/WProjectBlue.vue";
import WProjectGreenIcon from "@commen/icons/components/WProjectGreen.vue";
import WProjectRedIcon from "@commen/icons/components/WProjectRed.vue";
import WProjectYellowIcon from "@commen/icons/components/WProjectYellow.vue";
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
