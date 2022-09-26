const pageList = ({ pageLoaded, length }) => {
  let TARGET = pageLoaded || length != 0 ? "MENU" : "LIST";
  return `skeletonLoading/TOGGLE_SKELETON_LOADING_${TARGET}`;
};
const pagePreview = (path) => {
  return path.includes("edit")
    ? "formLoading/TOGGLE_FORM_LOADING"
    : "skeletonLoading/TOGGLE_SKELETON_LOADING_ONE";
};
const pageListOffers = (length) => {
  let TARGET = length != 0 ? "OFFERS_MENU" : "OFFERS";
  return `skeletonLoading/TOGGLE_SKELETON_LOADING_${TARGET}`;
};
export const setLoadingTypes = { pageList, pagePreview, pageListOffers };
