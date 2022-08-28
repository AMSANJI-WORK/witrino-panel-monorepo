<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-col class="pa-2" cols="6" sm="6" :md="colSizeMd">
        <v-card
          class="pa-2 d-flex flex-wrap rounded-lg transition-swing cursor-pointer"
          outlined
          :elevation="hover ? 3 : 1"
        >
          <v-list-item three-line class="px-0 d-flex flex-wrap">
            <v-list-item-avatar tile size="40">
              <component :is="dataSource.icon" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title
                class="mb-1 d-flex flex-wrap justify-space-between"
              >
                <p class="font-weight-normal text-caption">
                  {{ dataSource.title }}
                </p>
                <div>
                  <p
                    class="text-subtitle-2 font-weight-light"
                    :class="colorize(dataSource.present)"
                  >
                    <v-icon small :color="colorizeIcon(dataSource.present)">{{
                      dataSource.present > 0 ? "mdi-arrow-up" : "mdi-arrow-down"
                    }}</v-icon>
                    {{ present + "%" }}
                  </p>
                </div>
              </v-list-item-title>
              <v-card-title class="pa-0">{{ dataSource.number }}</v-card-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </template>
  </v-hover>
</template>

<script>
export default {
  props: {
    dataSource: Object,
    colSizeMd: {
      type: Number,
      default: 3,
    },
  },
  computed: {
    present() {
      if (this.dataSource.present < 0) return this.dataSource.present * -1;
      return this.dataSource.present;
    },
  },
  methods: {
    colorizeIcon(number) {
      if (number < 0) return "red";
      return "green";
    },
    colorize(number) {
      if (number < 0) return "red--text";
      return "green--text";
    },
  },
};
</script>

<style lang="scss" scoped>
.v-application .text-caption {
  font-size: 0.75rem !important;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.0333333333em !important;
  font-family: Vazir !important;
}
</style>
