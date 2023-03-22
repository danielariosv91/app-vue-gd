import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            records: []
        },
        mutations: {
            setRecords: (state, records) => {
                state.records = records
            }
        },
        actions: {
            async getRecords({ commit }) {
                let bodyRequest = {
                    "resource_id": "3d54e961-d81b-4507-aeee-7a433e00a9bf",
                    "filters": {},
                    "limit": 25,
                    "offset": 0
                }
                let response = await this.$axios.$post('https://datos.gob.cl/api/3/action/datastore_search', bodyRequest);
                commit('setRecords', response.result.records)
            },
        }
    })
}

export default createStore