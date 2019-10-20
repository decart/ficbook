import Vue from "vue";
import Vuex from "vuex";
import api from "../api/bookmarks";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookmarks: [],
    current: undefined,
    is_loading: false
  },
  mutations: {
    loading(state, is_loading) {
      state.is_loading = is_loading;
    },

    setBookmarks(state, bookmarks) {
      state.bookmarks = bookmarks;
    },

    setCurrent(state, bookmark) {
      state.current = bookmark;
    },

    upsert(state, bookmark) {
      const filtered = state.bookmarks.filter((b) => {
        return b.bookId == bookmark.bookId;
      });

      if (filtered.length) {
        filtered[0] = bookmark;
      } else {
        state.bookmarks.push(bookmark);
      }
    },

    remove(state, bookmark) {
      state.bookmarks = state.bookmarks.filter(
        b => b.bookId !== bookmark.bookId
      );
    }
  },
  actions: {
    getBookmarks({ state, commit }) {
      commit("loading", true);
      api.getBookmarks(bookmarks => {
        const current = bookmarks.filter((b) => {
          return b.bookId == state.current.bookId;
        });

        if (current.length) {
          commit("setCurrent", current[0]);
        }

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

    setCurrent({ commit }, bookmark) {
      commit("setCurrent", bookmark);
    }
  },
  modules: {}
});
