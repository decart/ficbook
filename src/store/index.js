import Vue from "vue";
import Vuex from "vuex";
import api from "../api/bookmarks";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookmarks: [],
    is_loading: false
  },
  mutations: {
    loading(state, is_loading) {
      state.is_loading = is_loading;
    },

    setBookmarks(state, bookmarks) {
      state.bookmarks = bookmarks;
    },

    upsert(state, bookmark) {
      const filtered = state.bookmarks.filter(
        b => b.bookId === bookmark.bookId
      );

      if (filtered !== undefined) {
        filtered[0] = bookmark;
      } else {
        state.bookmarks.push(bookmark);
      }
    }
  },
  actions: {
    getBookmarks({ commit }) {
      commit("loading", true);
      api.getBookmarks(bookmarks => {
        commit("setBookmarks", bookmarks);
        commit("loading", false);
      });
    }
  },
  modules: {}
});
