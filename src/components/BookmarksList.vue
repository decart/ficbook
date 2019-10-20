<template>
  <div id="bookmarks-list">
    <BookmarkView v-for="bookmark in bookmarks" :key="bookmark.bookId" :bookmark="bookmark" />
  </div>
</template>

<script>
import BookmarkView from "./BookmarkView";

export default {
  components: {
    BookmarkView
  },
  props: ['bookmarks'],
}
</script>

<style>
#bookmarks-list {
  position: fixed;
  top: 2em;
  bottom: 2em;
  left: 50%;
  width: 85%;
  transform: translateX(-50%);
  background: #faf4ea;
  z-index: 9999;
}
</style>
