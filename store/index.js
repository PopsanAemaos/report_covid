export const state = () => ({
    counter: 0 ,
    allconfirmed: 0,
    allrecovered: 0,
    allideaths: 0,
    Infected:[],
})


export const getters = {
    GETthailand: (state) => {
        return state.Infected[state.Infected.length - 1]
    }
}


export const mutations = {
    increment(state){
        state.counter++
    },

    INFECTED(state,playload){
        state.Infected = playload.data.Thailand

        // console.log(state.Infected)
    }
    


}

export const actions = {
     async SHOWINFECTED({commit,state}){
        let res = await this.$axios.get('https://pomber.github.io/covid19/timeseries.json');
        commit('INFECTED',res)
        // console.log(res.data);
     }
}

