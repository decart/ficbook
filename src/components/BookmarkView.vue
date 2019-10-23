<template>
  <div class="bookmark">
    <button @click="removeBookmark(bookmark)"><i class="icon-cross"></i></button>
    <BookmarkIcons :status="bookmark.status" :is_last="bookmark.is_last" />
    <a :href="page_link">{{ title }}</a>
    <span class="fandoms">{{ fandoms }}</span>
  </div>
</template>

<script>
import BookmarkIcons from "./BookmarkIcons";
import { _ } from "../helper";

export default {
  components: {
    BookmarkIcons
  },
  props: ["bookmark"],
  computed: {
    title: function() {
      return this.bookmark.bookTitle.split(" — ")[0].trim();
    },

    fandoms: function() {
      return this.bookmark.bookTitle.split(" — ")[1].trim();
    },

    page_link() {
      return "/readfic/" + this.bookmark.bookId + 
        "/" + this.bookmark.partId + 
        "#" + _(this.bookmark.hash, "line0");
    }
  },
  methods: {
    removeBookmark(bookmark) {
      if (confirm('Are you shure?')) {
        this.$store.dispatch("removeBookmark", bookmark);
      }
    }
  }
}
</script>

<style scoped>
.bookmark {
  margin: 0.2em;
}
.bookmark button {
  border: none;
  outline: none;
  width: 1.8em;
  background: transparent;
  border-radius: 1em;
  font-size: 0.9em;
}

.fandoms {
  display: inline-block;
  margin-left: 0.5em;
  color: #666;
  font-size: 0.7em;
}
</style>
