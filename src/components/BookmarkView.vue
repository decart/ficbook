<template>
  <div class="bookmark">
    <button @click="removeBookmark(bookmark)"><i class="icon-cross"></i></button>
    <BookmarkIcons :status="bookmark.status" :is_last="bookmark.is_last" />
    {{ title }}
    <span class="fandoms">{{ fandoms }}</span>
  </div>
</template>

<script>
import BookmarkIcons from "./BookmarkIcons";
import { mapActions } from 'vuex';

export default {
  components: {
    BookmarkIcons
  },
  props: ["bookmark"],
  computed: {
    title: function() {
      return this.bookmark.bookTitle.split(" — фанфик по фэндому ")[0];
    },

    fandoms: function() {
      return this.bookmark.bookTitle.split(" — фанфик по фэндому ")[1];
    }
  },
  methods: {
    ...mapActions([
      "removeBookmark"
    ])
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
  color: #666;
  font-size: 0.8em;
}
</style>
