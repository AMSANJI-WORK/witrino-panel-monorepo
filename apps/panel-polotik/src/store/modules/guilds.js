import auction from '@polotik/modules/Auction/Store';
import inquiry from "@polotik/modules/Inquiry/Store";
import tender from "@polotik/modules/Tender/Store";
import barter from "@polotik/modules/Barter/Store";
import sale from "@polotik/modules/Sale/Store";
import services from "@polotik/modules/Service/store";
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
