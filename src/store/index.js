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
        b => b.bookId != bookmark.bookId
      );
    },

    update(state, bookmark) {
      const idx = state.bookmarks.findIndex(b => b.bookId == bookmark.bookId);
      const newBookmarks = [...state.bookmarks];

      newBookmarks[idx] = bookmark;
      state.bookmarks = newBookmarks;
    },

    add(state, bookmark) {
      state.bookmarks.push(bookmark);
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
    },

    upsertBookmark({ commit }, bookmark) {
      commit("loading", true);

      if (typeof bookmark._id === "object") {
        api
          .updateBookmark(bookmark)
          .then(() => {
            commit("update", bookmark);
            commit("loading", false);
            history.pushState(null, null, "#" + bookmark.hash);
          })
          .catch(() => {
            commit("loading", false);
          });
      } else {
        api
          .addBookmark(bookmark)
          .then(() => {
            commit("add", bookmark);
            commit("loading", false);
          })
          .catch(() => {
            commit("loading", false);
          });
      }
    }
  },
  modules: {}
});
