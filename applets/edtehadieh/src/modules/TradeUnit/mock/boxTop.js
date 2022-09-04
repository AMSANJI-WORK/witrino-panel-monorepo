import AllTradeUnit from "@commen/icons/components/AllTradeUnit.vue";
import ActiveTradeUnit from "@commen/icons/components/ActiveTradeUnit.vue";
import DeActiveTradeUnit from "@commen/icons/components/DeActiveTradeUnit.vue";
import ExpirationTradeUnit from "@commen/icons/components/ExpirationTradeUnit.vue";
export default [
  {
    number: 1,
    title: "همه واحد های صنفی",
    present: 25,
    icon: AllTradeUnit,
  },
  {
    number: 2,
    title: "واحد های فعال",
    present: -10,
    icon: ActiveTradeUnit,
  },
  {
    number: 3,
    title: "واحد های در حال انقضا",
    present: 10,
    icon: ExpirationTradeUnit,
  },
  {
    number: 4,
    title: "واحد های غیر فعال",
    present: 0,
    icon: DeActiveTradeUnit,
  },
];
