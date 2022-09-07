function pageList({ pageLoaded, length }) {
  let TARGET = pageLoaded || length != 0 ? "MENU" : "LIST";
  return `skeletonLoading/TOGGLE_SKELETON_LOADING_${TARGET}`;
}
function pagePreview(path) {
  return path.includes("edit")
    ? "formLoading/TOGGLE_FORM_LOADING"
    : "skeletonLoading/TOGGLE_SKELETON_LOADING_ONE";
}
export const setLoadingTypes = { pageList, pagePreview };
