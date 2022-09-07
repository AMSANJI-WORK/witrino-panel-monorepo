const SkeletonLoaderMixin = {
  data() {
    return {
      elementLoading: true,
    };
  },
  methods: {
    elementReady() {
      setTimeout(() => {
        const readyHandler = () => {
          if (document.readyState == "complete") {
            this.elementLoading = false;
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
