<template>
  <v-sheet class="transparent">
    <!--  -->
    <v-chip x-small v-if="dataSource.index < 2">
      <span>{{ dataSource.item.name }}</span>
    </v-chip>
    <span v-if="dataSource.index == 2" class="grey--text text-caption">
      {{ dataSource.length | itemCounter }}
    </span>
  </v-sheet>
</template>

<script>
export default {
  props: {
    dataSource: Object,
    length: Array,
  },
  filters: {
    itemCounter(value) {
      return `+ ${value - 2} مورد دیگر`;
    },
  },
};
</script>

<style lang="scss" scoped></style>
