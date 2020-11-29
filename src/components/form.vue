<template>
  <div class="container" id="app-table">
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <form
          class="needs-validation"
          form
          action=""
          @submit.prevent="onSubmit"
        >
          <div class="form-row">
            <div class="col-md-7 mb-3">
              <label for="name">ФИО</label>
              <input
                type="text"
                class="form-control"
                id="name"
                value=""
                required
                v-model="name"
              />
              <div class="valid-tooltip">Looks good!</div>
            </div>
            <div class="col-md-5 mb-3">
              <label for="date">Дата рождения</label>
              <input
                type="date"
                class="form-control"
                id="date"
                value=""
                required
                v-model="date"
              />
              <div class="form-group"></div>
              <div class="valid-tooltip">Looks good!</div>
            </div>
          </div>
          <div class="form-row">
            <div class="col-md-7 mb-3">
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  required
                  placeholder="name@example.com"
                  v-model="email"
                />
              </div>
            </div>
            <div class="col-md-5 mb-3">
              <label for="phone">Телефон</label>
              <input
                type="tel"
                v-mask="'+#(###) ##-##-###'"
                placeholder="+#(###) ##-##-###"
                v-model="phone"
                name="phone"
                id="phone"
                class="form-control"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="payment">Сумма взноса</label>
              <input
                type="number"
                id="payment"
                class="form-control"
                required
                v-model="payment"
              />
            </div>
            <div class="col-md-4 mb-3">
              <label for="distance">Дистанция</label>
              <select
                class="custom-select"
                id="distance"
                required
                v-model="distance"
              >
                <option value="3">3км</option>
                <option value="5">5км</option>
                <option value="10">10км</option>
              </select>
              <div class="invalid-tooltip">Please select a valid distance.</div>
            </div>
            <div class="form-group col-md-4">
              <label for="dateNow">Дата регистрации</label>
              <input
                type="dateNow"
                id="dateNow"
                class="form-control"
                v-model="dateNow"
              />
            </div>
          </div>
          <button class="btn btn-success" type="submit">
            Отправить заявку
          </button>
        </form>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>


<script>
import { mask } from "vue-the-mask";
import { mapMutations } from "vuex";

export default {
  name: "app-table",
  directives: { mask },
  components: {},
  data() {
    return {
      ...getNewRecord(),
    };
  },
  methods: {
    ...mapMutations(["createUsers"]),
    onSubmit() {
      const data = Object.assign({}, this.$data);
      Object.assign(this.$data, getNewRecord());
      this.createUsers({ data });
    }
  },
};

function getNewRecord() {
  return {
    id: new Date().getTime(),
    date: null,
    name: null,
    email: null,
    phone: null,
    distance: null,
    payment: null,
    dateNow: new Date().toJSON().slice(0, 10).replace(/-/g, "."),
    sorted: false,
  };
}
</script>

<style lang="scss">
form {
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  margin-bottom: 50px;
}
</style>
