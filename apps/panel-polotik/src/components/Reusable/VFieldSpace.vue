<template>
  <v-col :class="styleClass" cols="12" :sm="sm" :md="md" :lg="lg"></v-col>
</template>

<script>
export default {
  props: {
    sm: Number,
    md: Number,
    lg: Number,
    styleClass: String,
  },
};
</script>
