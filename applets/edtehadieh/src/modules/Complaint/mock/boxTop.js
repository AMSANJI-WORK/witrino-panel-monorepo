import AllComplaints from "@shared/components/Icons/AllComplaints.vue";
import AnsweredComplaints from "@shared/components/Icons/AnsweredComplaints.vue";
import InprogressComplaints from "@shared/components/Icons/InprogressComplaints.vue";
export default [
  {
    number: 1,
    title: "همه شکایات",
    present: 25,
    icon: AllComplaints,
  },
  {
    number: 2,
    title: "شکایات پاسخ داده شده",
    present: -10,
    icon: AnsweredComplaints,
  },
  {
    number: 3,
    title: "شکایات در حال بررسی",
    present: 10,
    icon: InprogressComplaints,
  },
];
