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

    remove(state, bookmark) {
      state.bookmarks = state.bookmarks.filter(
        b => b.bookId !== bookmark.bookId
      );
    }
  },
  actions: {
    getBookmarks({ commit }) {
      commit("loading", true);
      api.getBookmarks(bookmarks => {
        commit("setBookmarks", bookmarks);
        commit("loading", false);
      });
    },

    removeBookmark({ state, commit }, bookmark) {
      const _oldBookmarks = state.bookmarks;
      commit("loading", true);
      commit("remove", bookmark);
      api
        .removeBookmark(bookmark)
        .then(() => {
          commit("loading", false);
        })
        .catch(() => {
          state.bookmarks = _oldBookmarks;
          commit("loading", false);
        });
    }
  },
  modules: {}
});
