import InquiryRoutes from "@packages/polotik/Inquiry/Routes";
import BarterRoutes from "@packages/polotik/Barter/Routes";
import AuctionsRoutes from "@packages/polotik/Auction/Routes";
import TendersRoutes from "@packages/polotik/Tender/Routes";
import SaleRoutes from "@packages/polotik/Sale/Routes";
export default [
  ...BarterRoutes,
  ...InquiryRoutes,
  ...AuctionsRoutes,
  ...TendersRoutes,
  ...SaleRoutes,
];
