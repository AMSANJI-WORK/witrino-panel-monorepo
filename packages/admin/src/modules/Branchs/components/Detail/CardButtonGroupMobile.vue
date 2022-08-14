<template>
    <v-col cols="12" sm="6" class="d-flex justify-center">
        <v-btn color="blue darken-4" small class="white--text mx-1">
            <polotik-page />
            &nbsp; پلتیک
        </v-btn>

        <v-btn color="light-blue" small class="white--text mx-1">
            <witrino-page />
            &nbsp; ویترینو
        </v-btn>

        <v-btn color="yellow darken-3" small class="white--text mx-1">
            <v-icon>mdi-power</v-icon>

            غیرفعال سازی
        </v-btn>

        <v-btn color="red" small class="white--text mx-1">
            <v-icon> mdi-delete</v-icon>
            حذف
        </v-btn>
    </v-col>
</template>

<script>
import WitrinoPage from "@shared/components/Icons/WitrinoPage.vue";
import PolotikPage from "@shared/components/Icons/PolotikPage.vue";
export default {
    components: {
        WitrinoPage,
        PolotikPage,
    },
};
</script>

<style lang="scss" scoped></style>
