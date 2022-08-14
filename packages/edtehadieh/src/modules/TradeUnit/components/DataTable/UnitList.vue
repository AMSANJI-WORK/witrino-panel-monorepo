<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1 rounded-lg"
  >
    <template v-slot:top class="">
      <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
          <v-card-title class="text-h5"
            >آیا از حذف این داده اطمینان دارید ؟</v-card-title
          >
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDelete"
              >انصراف</v-btn
            >
            <v-btn color="blue darken-1" text @click="deleteItemConfirm"
              >بله</v-btn
            >
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
    <template v-slot:[`item.invoice`]>
      <v-chip color="success" small class="rounded-lg">
        <span class="text-caption font-weight-bold white--text mx-2">فعال</span>
      </v-chip>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small color="red" @click="deleteItem(item)"> mdi-delete </v-icon>
      <v-icon small color="primary" class="mx-2"> mdi-eye </v-icon>
      <v-icon small color="yellow darken-2"> mdi-power </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
const HeaderDataTableClass = "blue lighten-3 white--text";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "ردیف",
        align: "start",
        sortable: false,
        value: "name",
        class: `${HeaderDataTableClass} rounded-tr-lg`,
      },
      {
        text: "عنوان واحد صنفی",
        value: "calories",
        sortable: false,
        class: HeaderDataTableClass,
      },
      { text: "وضعیت", value: "fat", class: HeaderDataTableClass },
      {
        text: "تعداد شکایات",
        value: "carbs",
        sortable: false,
        class: HeaderDataTableClass,
      },
      {
        text: "اسپانسر",
        value: "protein",
        sortable: false,
        class: HeaderDataTableClass,
      },
      {
        text: "تاریخ عضویت",
        value: "",
        sortable: false,
        class: HeaderDataTableClass,
      },
      {
        text: "عملیات",
        value: "actions",
        sortable: false,
        class: `${HeaderDataTableClass} rounded-tl-lg`,
      },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    downloadInvoice(item) {
      console.log(item);
    },
    initialize() {
      this.desserts = [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped></style>
