<template>
  <div class="nav__bar">
    <div style="display: flex;padding-left: 10px">
      <router-link :to="{ name: 'HelloWorld'}" @click="unShowForm" class="nav__bar__btn__1">
        Home
      </router-link>
      <router-link :to="{ name: 'RangeInput', params: { interest: 36 } }"  @click="unShowForm"  class="nav__bar__btn__1">
        RangeComponent
      </router-link>
      <router-link :to="{ name: 'People'}" @click="showForm" class="nav__bar__btn__1">
        PeopleComponent
      </router-link>
    </div>

    <form v-show="isShowForm" class="nav__bar__form">
      <select @input="setSortName" class="nav__bar__form__select">
        <option value="first_name" selected>поиск по имени</option>
        <option value="last_name">поиск по фамилии</option>
      </select>
      <input :value="sortList" @input="inputSortList" class="nav__bar__form__input">
    </form>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      isShowForm: false,
    }
  },
  computed: {
    ...mapState({
      sortList: state => state.people.sortList,
    }),
  },
  methods: {
    ...mapMutations({
      inputSortList: 'people/inputSortList',
      setSortName: 'people/setSortName',
    }),
    showForm () {
      this.isShowForm = true
    },
    unShowForm () {
      this.isShowForm = false
    },
  }
}
</script>

<style>
.nav__bar {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(210,255,250, 0.9);
}
.nav__bar__btn__1 {
  text-align: center;
  height: 25px;
  margin: auto 5px;
  border: 1px solid rgba(150, 176, 255, 0.9);
  border-radius: 5px;
  background-color: rgba(203,170,255, 0.8);
  display: flex;
  align-items: center;
  padding: 4px 4px;


  text-decoration: none;
  box-shadow: 2px 2px 4px rgba(150, 176, 255, 0.9);
}
.nav__bar__btn__1:hover {
  background-color: rgba(70,236,255, 0.8);
}
.nav__bar__btn__1:active {
  background-color: rgba(255,189,165, 0.8);
  box-shadow: none;
}

.nav__bar__form {
  display: flex;
  padding-right: 15px;
}
.nav__bar__form__input {
  margin-right: 10px;
  border-radius: 5px;
  width: 120px;
  height: 25px;
}
.nav__bar__form__select {
  border-radius: 5px;
  font-size: 14px;
  margin-right: 10px;
}
</style>