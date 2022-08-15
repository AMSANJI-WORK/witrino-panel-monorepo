<template>
    <v-sheet class="mx-2 transparent">
        <slot name="title"></slot>
        <From />
    </v-sheet>
</template>

<script>
import From from "@admin/modules/Operator/components/ModifyFrom.vue";
export default {
    components: {
        From,
    },
};
</script>

<style lang="scss" scoped></style>
