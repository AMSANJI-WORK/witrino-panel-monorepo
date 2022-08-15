<template>
    <v-sheet class="transparent">
        <div
            class="d-flex flex-wrap justify-space-around align-self-stretch transparent"
        >
            <ProjectIcons
                v-for="(icon, index) in boxTopData"
                :data-source="icon"
                :key="index"
            />
        </div>
        <SectionDivider
            title-class="text-subtitle-2"
            bind-class="my-5"
            title="اطلاعیه ها"
        >
            <template #action>
                <v-btn color="grey darken-2" text x-small>مشاهده همه</v-btn>
            </template>
        </SectionDivider>
        <NotificationProduct />
        <SectionDivider
            title-class="text-subtitle-2"
            bind-class="my-4"
            title="بنرهای شما"
        >
            <template #action>
                <v-btn color="grey darken-2" text x-small>مشاهده همه</v-btn>
            </template>
        </SectionDivider>
        <Banner />
    </v-sheet>
</template>

<script>
import boxTopData from "@namayande/modules/Dashboard/mock/boxTop";
import ProjectIcons from "@shared/components/ProjectIcons.vue";
import Banner from "@namayande/modules/Dashboard/components/Banner.vue";
import SectionDivider from "@shared/components/Reusable/SectionDivider.vue";
import NotificationProduct from "@shared/components/NotificationProduct.vue";
export default {
    components: {
        ProjectIcons,
        Banner,
        SectionDivider,
        NotificationProduct,
    },
    data() {
        return {
            boxTopData,
        };
    },
};
</script>

<style lang="scss" scoped></style>
