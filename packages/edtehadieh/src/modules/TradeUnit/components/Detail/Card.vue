<template>
    <v-sheet class="rounded-lg transparent">
        <v-card elevation="0" class="rounded-lg pa-2" outlined>
            <card-info />
            <div class="d-flex flex-wrap align-center">
                <card-button-group />
                <card-button-group-mobile class="d-block d-sm-none" />
                <v-col class="ml-2">
                    <card-loaction :lat="55.05" :long="55.05" />
                </v-col>
            </div>
        </v-card>
    </v-sheet>
</template>

<script>
import CardLoaction from "@edtehadieh/modules/TradeUnit/components/Detail/CardLoaction.vue";
import CardButtonGroup from "@edtehadieh/modules/TradeUnit/components/Detail/CardButtonGroup.vue";
import CardButtonGroupMobile from "@edtehadieh/modules/TradeUnit/components/Detail/CardButtonGroupMobile.vue";
import CardInfo from "@edtehadieh/modules/TradeUnit/components/Detail/CardInfo.vue";
export default {
    components: {
        CardButtonGroupMobile,
        CardButtonGroup,
        CardLoaction,
        CardInfo,
    },
};
</script>

<style lang="scss" scoped></style>
