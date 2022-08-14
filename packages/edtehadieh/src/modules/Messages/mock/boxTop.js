import AllMessage from "@edtehadieh/modules/Messages/components/Icons/AllMessage.vue";
import SentMessage from "@edtehadieh/modules/Messages/components/Icons/SentMessage.vue";
import UnreadMessage from "@edtehadieh/modules/Messages/components/Icons/UnreadMessage.vue";

export default [
  {
    number: 1,
    title: "همه پیام ها",
    present: 25,
    icon: AllMessage,
  },
  {
    number: 2,
    title:"پیام های خوانده نشده",
    present: 10,
    icon: UnreadMessage,
  },
  {
    number: 3,
    title: "پیام های ارسال شده",
    present: -10,
    icon: SentMessage,
  },
];
