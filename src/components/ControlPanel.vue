<template>
  <div id="bookmarks-wrapper">
    <div id="bookmarks-control-panel">
      <div id="loading-indicator" v-if="is_loading">Loading</div>
      <button id="bookmarks-list-button" @click="toggle_list">
        <PanelIcons name="bookmarks_list" />
      </button>

      <a v-if="current" :href="page_link">
        <PanelIcons name="goto" />
      </a>

      <button id="upsert-bookmark-button" v-if="is_book_page" @click="upsert">
        <PanelIcons name="add_bookmark" />
      </button>
    </div>
    <BookmarksList v-if="list_visible" @close="list_visible = false" :bookmarks="bookmarks" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BookmarksList from "./BookmarksList";
import PanelIcons from "./PanelIcons";
import { _, makeBookmark } from "../helper";

export default {
  components: {
    BookmarksList,
    PanelIcons
  },

  data() {
    return {
      list_visible: false
    };
  },

  methods: {
    toggle_list() {
      this.list_visible = !this.list_visible;
    },

    upsert() {
      const bookmark = {
        ...this.current,
        ...makeBookmark()
      };

      this.$store.dispatch("upsertBookmark", bookmark);
    }
  },

  computed: {
    is_book_page() {
      return !!document.location.href.match(/http.*?\/readfic\/(\d*)\/(\d*)/i);
    },
    book_id() {
      const bookInfo = document.location.href.match(/http.*?\/readfic\/(\d*)\/?/i);
      return bookInfo ? bookInfo[1] : undefined;
    },
    current() {
      return this.$store.state.bookmarks.find(b => b.bookId == this.book_id);
    },
    page_link() {
      return "/readfic/" + this.current.bookId + 
        "/" + this.current.partId + 
        "#" + _(this.current.hash, "line0");
    },
    ...mapState({
      bookmarks: state => state.bookmarks,
      is_loading: state => state.is_loading
    })
  },

  created() {
    this.$store.dispatch("getBookmarks");
  }
};
</script>

<style lang="css">
#bookmarks-control-panel {
  position: fixed;
  display: flex;
  top: 2em;
  left: 2em;
  overflow: hidden;
  background: #d3be97;
  border-radius: 1em;
  box-shadow: 0 0 1em #d3be97;
}

#loading-indicator {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  overflow: hidden;
  border-radius: 1em;
  background: rgba(255, 255, 255, 0.8);
}

#bookmarks-control-panel button,
#bookmarks-control-panel a {
  border: none;
  outline: none;
  background: transparent;
  transition: all .3s ease;
  padding: 1px 4px;
}

#bookmarks-control-panel button:hover,
#bookmarks-control-panel a:hover {
  background: #fff;
}
</style>
