const mainElementLoading = {
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    elementReady() {
      setTimeout(() => {
        const readyHandler = () => {
          if (document.readyState == "complete") {
            this.loading = false;
            document.removeEventListener("readystatechange", readyHandler);
          }
        };
        document.addEventListener("readystatechange", readyHandler);
        readyHandler();
      }, 1000);
    },
  },
};

export default mainElementLoading;
