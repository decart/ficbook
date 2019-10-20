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
  margin-left: -42%;
  background: #faf4ea;
  overflow-y: scroll;
  z-index: 9999;
}

#bookmarks-list::-webkit-scrollbar-track
{
    margin: 0.5em;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}

#bookmarks-list::-webkit-scrollbar
{
    width: 12px;
    background-color: transparent;
}

#bookmarks-list::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}
</style>
