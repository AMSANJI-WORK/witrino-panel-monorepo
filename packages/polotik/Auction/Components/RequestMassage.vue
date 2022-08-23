<template>
  <v-badge
    overlap
    color="#339987"
    :content="newRequestCounter"
    class="font-weight-medium"
  >
    <v-chip
      :ripple="false"
      color="white"
      @click="openDialog"
      class="mx-1 cursor-pointer"
    >
      <component :is="MassageIcon"></component>
    </v-chip>
    <v-dialog v-model="dialog" max-width="700">
      <v-card>
        <v-card-title class="grey lighten-2 font-weight-bold">
          درخواست های ارسالی
        </v-card-title>
        <v-card-subtitle class="my-4 py-0">
          این قسمت به صورت تستی فعال می باشد
        </v-card-subtitle>
        <v-card-text class="pa-2"> </v-card-text>
      </v-card>
    </v-dialog>
  </v-badge>
</template>

<script>
import MassageIcon from "@polotik/components/Icons/Massage.vue";
export default {
  components: {
    MassageIcon,
  },
  props: {
    dataSource: {
      type: Array,
      default: () => [
        {
          avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
          name: "امیر محمد سنجی",
          new: false,
          text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
     چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی`,
        },
        {
          name: "مهندس خدادادی",
          new: true,
          text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
     چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی`,
        },
        {
          name: "مهندس موسوی",
          new: true,
          text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
     چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی`,
        },
      ],
    },
  },
  data() {
    return {
      dialog: false,
      newRequestCounter: null,
      MassageIcon: "MassageIcon",
    };
  },
  watch: {
    dialog(newValue) {
      !newValue ? (this.$refs.requestDialog.panel = []) : "";
    },
  },
  methods: {
    openDialog() {
      this.dialog = true;
      this.sortRequest();
    },
    setNewCount(count) {
      this.newRequestCounter = count;
    },
    setCounter() {
      this.newRequestCounter = [
        ...this.dataSource.filter((request) => request.new === true),
      ].length;
    },
    sortRequest() {
      this.dataSource.sort((a, b) => b.new - a.new);
    },
  },
  created() {
    this.setCounter();
  },
};
</script>

<style lang="scss" scoped></style>
