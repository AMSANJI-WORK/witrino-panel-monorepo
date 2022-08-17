import InquiryRoutes from "@polotik/modules/Inquiry/Routes";
import BarterRoutes from "@polotik/modules/Barter/Routes";
import AuctionsRoutes from "@polotik/modules/Auction/Routes";
import TendersRoutes from "@polotik/modules/Tender/Routes";
import SaleRoutes from "@polotik/modules/Sale/Routes";
export default [
  ...BarterRoutes,
  ...InquiryRoutes,
  ...AuctionsRoutes,
  ...TendersRoutes,
  ...SaleRoutes,
];
