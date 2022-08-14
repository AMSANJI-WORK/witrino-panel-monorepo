<template>
    <v-card class="mx-2 rounded-lg pa-2" elevation="7">
        <v-list two-line>
            <v-list-item-group active-class="">
                <template v-for="(item, index) in items">
                    <v-list-item :key="item.title">
                        <template v-slot:default="{ active }">
                            <v-list-item-content :active="active">
                                <v-list-item-subtitle
                                    v-text="item.subtitle"
                                ></v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-btn
                                    color="#5492FE"
                                    x-small
                                    class="white--text"
                                    >مشاهده</v-btn
                                >
                            </v-list-item-action>
                        </template>
                    </v-list-item>

                    <v-divider
                        v-if="index < items.length - 1"
                        :key="index"
                        class="mx-3"
                    ></v-divider>
                </template>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        items: [
            {
                subtitle: `رسیدگی به استعلام شماره 232345`,
            },
            {
                subtitle: `رسیدگی به استعلام شماره 232345`,
            },
            {
                subtitle: "رسیدگی به استعلام شماره 120043",
            },
        ],
    }),
};
</script>

<style lang="scss" scoped></style>
