<template>
  <div id="app">
    <Table :users="allUsers" :gridColumns="gridColumns" />
    <Form />
  </div>
</template>

<script>
import Form from "./components/form";
import Table from "./components/table.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Table,
    Form,
  },
  computed: mapGetters(["allUsers"]),
  methods: mapActions(["getUsers"]),
  mounted() {
    this.getUsers();
  },
  data() {
    return {
      gridColumns: [
        "date",
        "name",
        "email",
        "phone",
        "distance",
        "payment",
        "dateNow",
      ],
    };
  },
};
</script>
