<template>
    <Modify>
        <template #title>
            <SectionDivider
                bind-class="my-5"
                title-class="font-weight-bold text-h6"
                card-title-class="px-0"
                title="ویرایش تم"
            />
        </template>
    </Modify>
</template>

<script>
import Modify from "@admin/modules/Themes/components/Modify.vue";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";

export default {
    components: {
        Modify,
        SectionDivider,
    },
};
</script>

<style lang="scss" scoped></style>
