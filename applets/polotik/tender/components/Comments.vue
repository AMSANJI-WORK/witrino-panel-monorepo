<template>
  <v-expansion-panels v-model="panel" multiple class="rounded-lg">
    <v-expansion-panel
      v-for="(request, index) in dataSource"
      :key="index"
      hide-actions
    >
      <v-expansion-panel-header>
        <v-row align="center" class="spacer" no-gutters>
          <v-col cols="2" class="hidden-xs-only">
            <v-avatar size="36px" class="grey">
              <img
                v-if="request.avatar"
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              />
              <v-icon v-else color="white"> mdi-account</v-icon>
            </v-avatar>
          </v-col>

          <v-col cols="4" md="3">
            <strong v-html="request.title"></strong>
          </v-col>
          <v-fade-transition>
            <v-col cols="2" v-if="request.new">
              <v-chip
                x-small
                label
                color="red lighten-1"
                class="white--text font-weight-black"
                >جدید</v-chip
              >
            </v-col>
          </v-fade-transition>
        </v-row>
      </v-expansion-panel-header>
      <v-divider></v-divider>

      <v-expansion-panel-content class="pa-0">
        <v-card-text
          class="px-0"
          v-if="!request.description"
          v-text="lorem"
        ></v-card-text>
        <v-card-text
          class="px-0"
          v-else
          v-text="request.description"
        ></v-card-text>

        <v-card-actions class="pa-0">
          <v-spacer></v-spacer>
          <v-fade-transition>
            <v-btn
              color="success"
              class="font-weight-medium text-small"
              plain
              @click="toggleSeenRequest(index)"
              >{{ toggleSeenRequestBtnTilte(index) }}
              <v-icon small class="mx-1">{{
                toggleSeenRequestBtnIcon(index)
              }}</v-icon></v-btn
            >
          </v-fade-transition>
        </v-card-actions>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Array,
      default: () => [
        {
          avatar: "https://avatars0.githubusercontent.com/u/9064066?v=4&s=460",
          name: "امیر محمد سنجی",
          new: true,
        },
        {
          name: "مهندس خدادادی",
          new: true,
        },
        {
          name: "مهندس موسوی",
          new: false,
        },
      ],
    },
  },
  data: () => ({
    panel: [],
    lorem: `این درخواست دارای متن نیست`,
  }),
  computed: {
    newCount() {
      return [...this.dataSource.filter((request) => request.new === true)]
        .length;
    },
  },
  methods: {
    toggleSeenRequestBtnTilte(index) {
      return this.dataSource[index].new ? "دیده شده" : "دیده نشده";
    },
    toggleSeenRequestBtnIcon(index) {
      return this.dataSource[index].new ? "mdi-eye" : "mdi-eye-off";
    },
    toggleSeenRequest(index) {
      this.dataSource[index].new = !this.dataSource[index].new;
      this.$emit("changeNewCount", this.newCount);
    },
  },
};
</script>

<style lang="scss" scoped></style>
