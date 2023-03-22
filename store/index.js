import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            records: [],
            comunas: [],
            codigos: []
        },
        mutations: {
            setRecords: (state, records) => {
                state.records = records
            },
            setComunas: (state, comunas) => {
                state.comunas = comunas
            },
            setCodigos: (state, codigos) => {
                state.codigos = codigos
            },
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
                commit('setRecords', response.result.records);

                let comunas = response.result.records.map(item => (item.COMUNA));
                let uniqueComunas = [...new Set(comunas)];
                commit('setComunas', uniqueComunas);

                let codigos = response.result.records.map(item => (item.CODIGO));
                let uniqueCodigos = [...new Set(codigos)];
                commit('setCodigos', uniqueCodigos);
            },
            async getRecordsFiltered({ commit }, filter) {
                let bodyRequest = {
                    "resource_id": "3d54e961-d81b-4507-aeee-7a433e00a9bf",
                    "filters": {
                        "COMUNA": [
                            filter
                        ]
                    },
                    "limit": 25,
                    "offset": 0
                }
                let response = await this.$axios.$post('https://datos.gob.cl/api/3/action/datastore_search', bodyRequest);
                commit('setRecords', response.result.records);
            },
        }
    })
}

export default createStore