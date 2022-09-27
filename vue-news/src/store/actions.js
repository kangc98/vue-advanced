import { fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js';

export default {
    async FETCH_NEWS(context) {
        try {
            const response = await fetchNewsList();
            console.log(response);
            context.commit('SET_NEWS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_ASK(context) {
        try {
            const response = await fetchAskList();
            console.log(response);
            context.commit('SET_ASK', response.data);
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_JOBS({ commit }) {
        try {
            const { data } = await fetchJobsList();
            commit('SET_JOBS', data);
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_USER({ commit }, name) {
        try {
            const { data } = await fetchUserInfo(name);
            commit('SET_USER', data);
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_ITEM({ commit }, id) {
        try {
            const { data } = await fetchItemInfo(id);
            commit('SET_ITEM', data);
        } catch (error) {
            console.log(error);
        }
    },
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);

        commit('SET_LIST', response.data);
        return response;
    }
}