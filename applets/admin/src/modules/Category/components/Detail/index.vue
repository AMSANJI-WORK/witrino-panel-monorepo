<template>
    <v-sheet class="rounded-lg transparent mx-2">
        <SectionDivider
            card-title-class="px-0 pt-0"
            title-class="text-subtitle-2"
            bind-class="my-5"
            title="نماینده"
        >
        </SectionDivider>
        <DetailCard />
        <DetailTabs />
    </v-sheet>
</template>

<script>
import DetailTabs from "@applets/admin/src/modules/Branchs/components/Detail/Tabs.vue";
import DetailCard from "@applets/admin/src/modules/Branchs/components/Detail/Card.vue";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
export default {
    components: {
        DetailTabs,
        DetailCard,
        SectionDivider,
    },
};
</script>

<style lang="scss" scoped></style>
