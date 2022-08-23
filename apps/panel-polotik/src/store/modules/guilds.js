import services from "@packages/polotik/Service/store";
import auction from "@packages/polotik/Auction/Store";
import inquiry from "@packages/polotik/Inquiry/Store";
import tender from "@packages/polotik/Tender/Store";
import barter from "@packages/polotik/Barter/Store";
import sale from "@packages/polotik/Sale/Store";

const guilds = {
  namespaced: true,
  modules: {
    sale,
    tender,
    barter,
    inquiry,
    auction,
    services,
  },
};
export default guilds;
