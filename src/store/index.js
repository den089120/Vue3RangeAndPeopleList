import {createStore} from "vuex";
import {PeopleStore} from "./PeopleStore";


export default createStore({
   modules: {
      people: PeopleStore,
   }
})