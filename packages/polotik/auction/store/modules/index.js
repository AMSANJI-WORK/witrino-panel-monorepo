import formLoading from "@commen/loading/modules/form/store";
import request from "@packages/polotik/auction/modules/offers/store";
import skeletonLoading from "@commen/loading/modules/skeleton/store";
import pagination from "@commen/pagination/polotik/store";
import paginationSelfItem from "@commen/pagination/polotik/store";
import paginationSelfOffered from "@commen/pagination/polotik/store";
export default {
  request,
  pagination,
  paginationSelfItem,
  paginationSelfOffered,
  formLoading,
  skeletonLoading,
};
