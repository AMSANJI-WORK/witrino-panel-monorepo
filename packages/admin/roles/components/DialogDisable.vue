<template>
  <v-dialog :value="value" @input="$emit('input', $event)" max-width="500px">
    <v-card>
      <v-card-title class="text-h5"
        >آیا از حذف این داده اطمینان دارید ؟</v-card-title
      >
      <v-spacer></v-spacer>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click.native="disable('disableItem')"
          >انصراف
        </v-btn>
        <v-btn color="blue darken-1" text @click.native="disableItemConfirm"
          >بله</v-btn
        >
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disableItemConfirm: Function,
    disableItem: Function,
  },
  methods: {
    disable(disableType) {
      this[disableType]();
      this.$emit("input", false);
    },
  },
};
</script>

<style lang="scss" scoped></style>
