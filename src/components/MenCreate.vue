<template>
  <div class="men">
    <div class="men__img">
      <img v-if="avatar" :src="avatar" alt="">
    </div>
    <div class="men__desc">
      <div class="men__desc__text">Имя:</div>
      <input type="text" class="men__desc__text" name="first_name" v-model="firstName">
      <div class="men__desc__text">Фамилия:</div>
      <input type="text" class="men__desc__text" name="last_name" v-model="lastName">
      <div class="men__desc__text">Email:</div>
      <input type="email" class="men__desc__text" name="email" v-model="email">
      <div class="men__desc__text">Аватар:</div>
      <input type="file" @change="selectFile($event)" name="image">
    </div>
    <div class="men__btn">
      <router-link :to="{ name: 'People'}" class="men__btn__back">НАЗАД</router-link>
      <router-link :to="{ name: 'People'}" @click="createMen" class="men__btn__update">ДОБАВИТЬ</router-link>
    </div>
  </div>
</template>

<script>

import {mapState, mapMutations, mapGetters} from "vuex";
// import path from 'node:path';
export default {
  name: "MenCreate",
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      avatar: '',
      fileAvatar: null,
    }
  },
  computed: {
    ...mapState({
      peopleList: state => state.people.peopleList,

    }),
    ...mapGetters({

    }),
  },
  methods: {
    ...mapMutations({
      setMenForList: 'people/setMenForList',
    }),
    selectFile(event) {
      console.log(event.target.files[0])
      this.fileAvatar = event.target.files[0]
      this.avatar = window.URL.createObjectURL(this.fileAvatar)

    },
    createMen() {
      let obj = {
        id: Date.now(),
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        avatar: this.avatar,
      }
      this.setMenForList({...obj})
    },
  },
}
</script>

<style>
.men {
  display: flex;
  margin-top: 70px;
  justify-content: center;
}
.men__img {
  width: 150px;
  height: 150px;
  border-radius: 5px;
  margin-right: 50px;

}
.men__img img {
  width: 100%;
}
.men__desc {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 50px;
}
.men__desc__text {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 250px;
  height: 25px;
  background: linear-gradient(rgba(244,248,248, 0.9), rgba(209,248,243, 0.9));
  border-radius: 4px;
  padding-left: 5px;
  border-left: 1px solid dimgray;
  border-bottom: 1px solid dimgray;
}
.men__btn {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

}
.men__btn__back {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border: 1px solid rgba(150, 176, 255, 0.9);
  border-radius: 5px;
  background-color: rgba(203,170,255, 0.8);
  text-decoration: none;
  box-shadow: 2px 2px 4px rgba(150, 176, 255, 0.9);
  margin: 0 5px;
  cursor: pointer;
  font-size: 14px;
}
.men__btn__back:hover {
  background-color: rgba(70,236,255, 0.8);
}
.men__btn__back:active {
  background-color: rgba(255, 189, 165, 0.8);
  box-shadow: none;
}
.men__btn__update {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border: 1px solid rgba(150, 176, 255, 0.9);
  border-radius: 5px;
  background-color: rgba(194,51,19, 0.8);
  text-decoration: none;
  box-shadow: 2px 2px 4px rgba(150, 176, 255, 0.9);
  margin: 0 5px;
  cursor: pointer;
  font-size: 14px;
}
.men__btn__update:hover {
  background-color: rgba(255,70,67, 0.8);
}
.men__btn__update:active {
  background-color: rgba(252,201,73, 0.8);
  box-shadow: none;
}
</style>