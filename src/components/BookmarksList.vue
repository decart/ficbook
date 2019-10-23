<template>
  <div id="bookmarks-list">
    <button class="close-list" @click="$emit('close')"><i class="icon-cross"></i></button>
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
  margin-left: -42%;
  background: #faf4ea;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  overflow-y: scroll;
  z-index: 9999;
}

.close-list {
  position: absolute;
  right: 0;
  top: 5px;
  background: transparent;
  border: none;
  outline: none;
}

#bookmarks-list::-webkit-scrollbar {
  width: 12px;
  background-color: transparent;
}

#bookmarks-list::-webkit-scrollbar-track {
  margin-top: 30px;
  margin-bottom: 5px;
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

#bookmarks-list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #555;
}
</style>
