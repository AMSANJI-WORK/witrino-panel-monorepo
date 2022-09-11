<template>
  <v-card class="mx-2 pa-0 rounded-lg" width="110" elevation="0">
    <v-badge right offset-x="30" offset-y="10" overlap color="transparent">
      <template v-slot:badge v-if="!hideDeleteBtn">
        <v-btn fab x-small color="white" @click="deleteImage(DataIndex)">
          <v-icon small color="red">mdi-delete</v-icon>
        </v-btn>
      </template>

      <v-img
        :src="getImageBySrc(DataSource.src)"
        height="110"
        width="110"
        class="rounded-lg"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-linear
              color="yellow darken-4"
              indeterminate
              rounded
              height="6"
            ></v-progress-linear>
          </v-row>
        </template>
      </v-img>
    </v-badge>
  </v-card>
</template>

<script>
export default {
  props: {
    DataSource: [File, Object],
    DataIndex: Number,
  },
  data() {
    return {
      host: import.meta.env.VITE_BASE_URL,
    };
  },
  computed: {
    routeIsPreview() {
      return this.$route.path.includes("preview");
    },
    hideDeleteBtn() {
      return this.routeIsPreview || this.currentStep == 6;
    },
    serviceName() {
      return this.$store.getters.serviceName;
    },
    currentStep() {
      return this.$store.getters[`guilds/${this.serviceName}/step`];
    },
  },
  methods: {
    getImageBySrc(image) {
      return import.meta.env.VITE_BASE_URL + image;
    },
    deleteImage() {
      this.$emit("deleteImageFromUpload");
    },
  },
};
</script>

<style lang="scss" scoped></style>
