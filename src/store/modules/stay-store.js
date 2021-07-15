import {stayService} from '../../services/stay.service.js'
export const stayStore = {

    strict: true,
    state: {
        stays: [],
        currstay: null,
    },
    getters: {
        stays(state) {
            return state.stays
        },
    },
    mutations: {
        setStays(state, { stays }) {
            state.stays = stays
        }
    },
    actions: {
         async loadStays(content) {
            try {
                const stays = await stayService.query()
                content.commit({ type: 'setStays', stays })
                return stays
            }
            catch (err) {
                console.log('Cannot load stays', err);
                throw err;
            }
        },
        saveStay() {

        },
        addReview() {

        }

    }
}