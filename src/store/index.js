import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        list:[],
        gender:'',

    },
    mutations:{
        SET_LIST(state,obj){
            state.list=obj
        }
    }
})