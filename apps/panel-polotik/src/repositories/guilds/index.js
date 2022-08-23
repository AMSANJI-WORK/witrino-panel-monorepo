import auction from "@packages/polotik/Auction/Repositories";
import tender from "@packages/polotik/Tender/Repositories";
import inquiry from "@packages/polotik/Inquiry/Repositories";
import barter from "@packages/polotik/Barter/Repositories";
import sale from "@packages/polotik/Sale/Repositories";
import service from "./service";
export default {
  ...inquiry,
  ...auction,
  ...barter,
  ...tender,
  ...service,
  ...sale,
};
