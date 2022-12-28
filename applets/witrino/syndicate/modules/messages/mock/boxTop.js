import AllMessage from "@applets/witrino/syndicate/modules/messages/components/Icons/AllMessage.vue";
import SentMessage from "@applets/witrino/syndicate/modules/messages/components/Icons/SentMessage.vue";
import UnreadMessage from "@applets/witrino/syndicate/modules/messages/components/Icons/UnreadMessage.vue";

export default [
  {
    number: 1,
    title: "همه پیام ها",
    percent: 25,
    icon: AllMessage,
  },
  {
    number: 2,
    title:"پیام های خوانده نشده",
    percent: 10,
    icon: UnreadMessage,
  },
  {
    number: 3,
    title: "پیام های ارسال شده",
    percent: -10,
    icon: SentMessage,
  },
];
