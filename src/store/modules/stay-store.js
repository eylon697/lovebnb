import { stayService } from '../../services/stay.service.js'
export const stayStore = {

    strict: true,
    state: {
        stay: null,
        stays: [],
        currstay: null,
      
    },
    getters: {
        stays(state) {
            return state.stays
        },
        stay(state) {
            return state.stay
        },
    },
    mutations: {
        setStays(state, { stays }) {
            state.stays = stays
        },
        setStay(state, { stay }) {
            state.stay = stay
        },
        // setFilter(){
        //     state.filter=
        // }
    },
    actions: {
        async loadStays(content) {
            try {
                const stays = await stayService.query()
                content.commit({ type: 'setStays', stays })
                console.log('Stays Loaded successfuly', stays)
            } catch (err) {
                console.log('Cannot load stays', err);
                throw err;
            }
        },
        async loadStay({ commit }, { stayId }) {
            try {
                const stay = await stayService.getById(stayId)
                commit({ type: 'setStay', stay })
                console.log('Stay Loaded successfuly', stay)
            } catch (err) {
                console.log('Cannot load stay', err);
                throw err;
            }
        },
        saveStay() {

        },
        addReview() {

        },
    }
}