<template>
  <v-card class="mx-2 pa-0" width="110" elevation="0">
    <v-card-title class="pa-0">
      <v-spacer></v-spacer>
      <v-btn
        color="red"
        x-small
        icon
        class="rounded-circle"
        @click="deleteImage(DataIndex)"
        ><v-icon small color="red">mdi-close</v-icon></v-btn
      >
    </v-card-title>
    <v-card class="pa-0">
      <v-img
        v-if="!DataSource.src"
        :src="getImage(DataSource)"
        height="110"
        width="110"
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
      <v-img
        v-else
        :src="getImageBySrc(DataSource.src)"
        height="110"
        width="110"
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
    </v-card>
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
    //   host: import.meta.env.VITE_BASE_URL,
    };
  },
  methods: {
    getImage(image) {
      return URL.createObjectURL(image);
    },
    // getImageBySrc(image) {
    //   if (image.includes("polotik")) return image;
    //   return this.host + image;
    // },
    deleteImage() {
      this.$emit("deleteImageFromUpload");
    },
  },
};
</script>

<style lang="scss" scoped></style>
