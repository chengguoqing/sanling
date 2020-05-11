import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userinfo:'',
		cansu:{}
	},
	mutations: {
		setuserinfo(state,data) {
			state.userinfo = data
		},
		setcansu(state,data) {
			state.cansu = data
		}
	}
})

export default store
