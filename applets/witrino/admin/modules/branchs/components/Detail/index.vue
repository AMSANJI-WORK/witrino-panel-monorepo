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
import DetailTabs from "@applets/witrino/admin/modules/branchs/components/Detail/Tabs.vue";
import DetailCard from "@applets/witrino/admin/modules/branchs/components/Detail/Card.vue";
import SectionDivider from "@applets/commen/section-divider/components/SectionDivider.vue";
export default {
    components: {
        DetailTabs,
        DetailCard,
        SectionDivider,
    },
};
</script>

<style lang="scss" scoped></style>
