<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th
            v-for="column in gridColumns"
            :key="column"
            @click="sortBy(column)"
          >
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in sortedList" :key="item.id">
          <td v-for="column in gridColumns" :key="column">
            {{ item[column] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  name: "app-table",
  props: ["users", "gridColumns"],
  data() {
    return {
      sortKey: "",
    };
  },
  computed: {
    sortedList() {
      const copy = [...this.users];
      switch (this.sortKey) {
        case "date":
          return copy.sort(sortByDate);
        case "dateNow":
          return copy.sort(sortByDateNow);
        case "payment":
          return copy.sort(sortByPayment);
        case "distance":
          return copy.sort(sortByDistance);
        default:
          return copy;
      }
    },
  },
  methods: {
    sortBy: function (column) {
      this.sortKey = column;
    },
  },
};

let sortByDate = function (d1, d2) {
  return d1.date > Date.parse(d2.date) ? 1 : -1;
};
let sortByDateNow = function (d1, d2) {
  return d1.dateNow > Date.parse(d2.dateNow) ? 1 : -1;
};
let sortByPayment = function (d1, d2) {
  return d1.payment > d2.payment ? 1 : -1;
};
let sortByDistance = function (d1, d2) {
  return d1.distance > d2.distance ? 1 : -1;
};
</script>

<style scoped lang="scss">
.table {
  border-collapse: collapse;
  margin-top: 50px;
  tr,
  th,
  td {
    padding: 5px;
    border: 1px solid black;
  }
  th {
    background: #35495e;
    color: white;
    padding: 10px;
  }
}
</style>
