import { userService } from "../../services/user.service.js"


export const userStore = {
        strict: true,
        state: {
            loggedinUser: userService.getLoggedinUser(),
            users: [],

        },
        getters: {
            users({ users }) { return users },
            loggedinUser({ loggedinUser }) { return loggedinUser },
        },
        mutations: {
            setLoggedinUser(state, { user }) {
                state.loggedinUser = user;
            },
            setUsers(state, { users }) {
                state.users = users;
            },
        },
        actions: {
            async login({ commit }, { userCred }) {
                try {
                    const user = await userService.login(userCred);
                    commit({ type: 'setLoggedinUser', user })
                    return user;
                } catch (err) {
                    console.log('userStore: Error in login', err)
                    throw err
                }
            },
            async signup({ commit }, { userCred }) {
                try {
                    console.log('store', userCred);
                    const user = await userService.signup(userCred)
                    commit({ type: 'setLoggedinUser', user })
                    return user;
                } catch (err) {
                    console.log('userStore: Error in signup', err)
                    throw err
                }

            },
            async logout({ commit }) {
                try {
                    await userService.logout()
                    commit({ type: 'setLoggedinUser', user: null })
                } catch (err) {
                    console.log('userStore: Error in logout', err)
                    throw err
                }
            },

        }
    }
    // var user = {
    //     _id: "u101",
    //     fullName: "OrlyAmdadi",
    //     userName: "orly@amdadi.com",
    //     password: "tinkerbell",
    //     imgUrl: "http://some-img",
    //     hostOrders: [
    //         {
    //             _id: '',
    //             dates: [],
    //             guests: 0,
    //             created: 0123456789123,
    //             status: 'pending',
    //             stay: {
    //                 _id: '',
    //                 name: '',
    //                 imgUrl: ''
    //             },
    //             guest: {
    //                 _id: '',
    //                 name: '',
    //                 imgUrl: ''
    //             },
    //         }
    //     ],
       
    //         stays:     [
    //                            { 
    //                     _id: '',
    //                     name: '',
    //                     imgUrl: ''
    //                                }
    //                ],
    //         hostOrders: [
    //             {
    //                 _id: '',
    //                 dates: [],
    //                 guests: 0,
    //                 created: 0123456789123,
    //                 status: 'pending',
    //                 stay: {
    //                     _id: '',
    //                     name: '',
    //                     imgUrl: ''
    //                 },
    //                 guest: {
    //                     _id: '',
    //                     name: '',
    //                     imgUrl: ''
    //                 },
    //             },
    //             {
    //                 _id: '',
    //                 dates: [],
    //                 guests: 0,
    //                 created: 0123456789123,
    //                 status: 'pending',
    //                 stay: {
    //                     _id: '',
    //                     name: '',
    //                     imgUrl: ''
    //                 },
    //                 guest: {
    //                     _id: '',
    //                     name: '',
    //                     imgUrl: ''
    //                 },
    //             }
    //         ]
        
    // }
    // var order = {
    //     dates,
    //     guests,
    //     nightPrice: this.stay.price,
    //     nightsPrice,
    //     servPrice,
    //     totalPrice,
    //     created: 0123456789123,
    //     coinFormater,
    //     stay: {
    //         _id: this.stay._id,
    //         name: this.stay.name,
    //         imgUrl: this.stay.imgUrls[0],
    //     },
    //     host: {
    //         _id: this.stay.host._id,
    //         fullName: this.stay.host.fullName,
    //         imgUrl: this.stay.host.imgUrl,
    //     },
    //     guest: {
    //         _id: "1",
    //         fullName: "Muki Kuki",
    //         imgUrl: this.stay.host.imgUrl,
    //     },
    // };