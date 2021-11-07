import axios from "axios";

export const PeopleStore = {
   state() {
      return {
         peopleList: [],
         sortList: '',
         sortName: 'first_name',
      }
   },
   getters: {
      selectedSort(state) {
         return state.peopleList.filter(el => el.first_name.toLowerCase().startsWith(state.sortList.toLowerCase()))
      },
      selectSortLastName(state) {
         return state.peopleList.filter(el => el.last_name.toLowerCase().startsWith(state.sortList.toLowerCase()))
      },
   },
   mutations: {
      setPeopleList(state, list) {
         if (state.peopleList.length > 0) {
            return
         }
         state.peopleList = list.data
      },
      setMenForList(state, objMen) {
         state.peopleList.push(objMen)
      },
      deleteItem(state, id) {
         state.peopleList = state.peopleList.filter(el => el.id !== id)
      },
      inputSortList(state, e) {
         state.sortList = e.target.value
      },
      setSortName(state, e) {
         state.sortName = e.target.value
      },
   },
   actions: {
      async getListPeople({commit}) {
         try {
            const response = await axios.get('https://reqres.in/api/users?page=1')
            commit('setPeopleList', response.data)
         } catch (e) {
            alert(e.message)
         }
      }
   },
   namespaced: true,
}