import offer from "@commen/offer/polotik/repositories";
import category from "./category";
import unit from "./unit";
export default {
  ...category,
  ...offer,
  ...unit,
};
