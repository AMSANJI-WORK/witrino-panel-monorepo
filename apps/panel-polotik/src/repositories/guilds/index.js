import auction from "@polotik/modules/Auction/Repositories";
import tender from "@polotik/modules/Tender/Repositories";
import inquiry from "@polotik/modules/Inquiry/Repositories";
import barter from "@polotik/modules/Barter/Repositories";
import sale from "@polotik/modules/Sale/Repositories";
import service from "./service";
export default {
  ...inquiry,
  ...auction,
  ...barter,
  ...tender,
  ...service,
  ...sale,
};
