const SkeletonLoaderMixin = {
  data() {
    return {
      pageLoading: true,
    };
  },
  methods: {
    pageReady() {
      setTimeout(() => {
        const readyHandler = () => {
          if (document.readyState == "complete") {
            this.pageLoading = false;
            document.removeEventListener("readystatechange", readyHandler);
          }
        };
        document.addEventListener("readystatechange", readyHandler);
        readyHandler();
      }, 1000);
    },
  },
};

export default SkeletonLoaderMixin;
