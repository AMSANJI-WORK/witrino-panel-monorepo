<template>
    <Modify>
        <template #title>
            <SectionDivider
                bind-class="my-5"
                title-class="font-weight-bold text-h6"
                card-title-class="px-0"
                title="افزودن محصول"
            />
        </template>
    </Modify>
</template>

<script>
import Modify from "@namayande/modules/Sell/components/Modify.vue";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";

export default {
    components: {
        Modify,
        SectionDivider,
    },
};
</script>

<style lang="scss" scoped></style>
