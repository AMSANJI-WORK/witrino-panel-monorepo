import AllComplaints from "@applets/commen/icons/components/AllComplaints.vue";
import AnsweredComplaints from "@applets/commen/icons/components/AnsweredComplaints.vue";
import InprogressComplaints from "@applets/commen/icons/components/InprogressComplaints.vue";
export default [
  {
    number: 1,
    title: "همه شکایات",
    percent: 25,
    icon: AllComplaints,
  },
  {
    number: 2,
    title: "شکایات پاسخ داده شده",
    percent: -10,
    icon: AnsweredComplaints,
  },
  {
    number: 3,
    title: "شکایات در حال بررسی",
    percent: 10,
    icon: InprogressComplaints,
  },
];
