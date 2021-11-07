<template>
  <div class="people__list">
    <router-link :to="{ name: 'MenCreate' }" class="people__item__btn-create">добавить в список</router-link>
    <div v-if="sortName === 'first_name'">
      <div  v-for="men in selectedSort" :key="men.id" class="people__item">
        <div style="display: flex;">
          <div class="people__item__name">Имя :</div>
          <div class="people__item__name">{{ men.first_name }}</div>
          <div class="people__item__name">Фамилия :</div>
          <div class="people__item__name">{{ men.last_name }}</div>
        </div>
        <div style="display: flex;">
          <router-link :to="{ name: 'MenDescription', params: {...men}}" class="people__item__btn-context">Подробнее</router-link>
          <div class="people__item__btn-delete" @click="deleteItem(men.id)">удалить</div>
        </div>
      </div>
    </div>
    <div v-if="sortName === 'last_name'">
      <div v-for="men in selectSortLastName" :key="men.id" class="people__item">
        <div style="display: flex;">
          <div class="people__item__name">Имя :</div>
          <div class="people__item__name">{{ men.first_name }}</div>
          <div class="people__item__name">Фамилия :</div>
          <div class="people__item__name">{{ men.last_name }}</div>
        </div>
        <div style="display: flex;">
          <router-link :to="{ name: 'MenDescription', params: {...men}}" class="people__item__btn-context">Подробнее</router-link>
          <div class="people__item__btn-delete" @click="deleteItem(men.id)">удалить</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapState, mapActions, mapMutations, mapGetters} from "vuex";
export default {
  name: "People",
  data() {
    return {

    }
  },
  mounted() {
    this.getListPeople()
  },
  computed: {
    ...mapState({
      peopleList: state => state.people.peopleList,
      sortName: state => state.people.sortName,
    }),
    ...mapGetters({
      selectedSort: 'people/selectedSort',
      selectSortLastName: 'people/selectSortLastName',
    }),
  },
  methods: {
    ...mapMutations({
      deleteItem: 'people/deleteItem',
    }),
    ...mapActions({
      getListPeople: 'people/getListPeople',
    })
  },
}
</script>

<style>
.people__list {
  margin-top: 70px;
}
.people__item__btn-create {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 30px;
  border: 1px solid rgba(150, 176, 255, 0.9);
  border-radius: 5px;
  background-color: rgba(203,170,255, 0.8);
  text-decoration: none;
  box-shadow: 2px 2px 4px rgba(150, 176, 255, 0.9);
  margin: 0 5px;
  cursor: pointer;
}
.people__item__btn-create:hover {
  background-color: rgba(70,236,255, 0.8);
}
.people__item__btn-create:active {
  background-color: rgba(255, 189, 165, 0.8);
  box-shadow: none;
}
.people__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background: linear-gradient(rgba(246, 248, 248, 0.9), rgba(220, 250, 246, 0.9));
  margin: 5px 0;
  border-radius: 5px;
}
.people__item__name {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  width: 100px;
  border-bottom: 1px solid darkgray;
  border-left: 1px solid darkgray;
  border-radius: 3px;
}
.people__item__btn-context {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 30px;
  border: 1px solid rgba(150, 176, 255, 0.9);
  border-radius: 5px;
  background-color: rgba(203,170,255, 0.8);
  text-decoration: none;
  box-shadow: 2px 2px 4px rgba(150, 176, 255, 0.9);
  margin: 0 5px;
  cursor: pointer;
}
.people__item__btn-context:hover {
  background-color: rgba(70,236,255, 0.8);
}
.people__item__btn-context:active {
  background-color: rgba(255, 189, 165, 0.8);
  box-shadow: none;
}
.people__item__btn-delete {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 30px;
  border: 1px solid rgba(150, 176, 255, 0.9);
  border-radius: 5px;
  background-color: rgba(194,51,19, 0.8);
  text-decoration: none;
  box-shadow: 2px 2px 4px rgba(150, 176, 255, 0.9);
  margin: 0 5px;
  cursor: pointer;
}
.people__item__btn-delete:hover {
  background-color: rgba(255,70,67, 0.8);
}
.people__item__btn-delete:active {
  background-color: rgba(252,201,73, 0.8);
  box-shadow: none;
}
</style>