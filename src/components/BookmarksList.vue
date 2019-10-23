<template>
  <div id="bookmarks-list">
    <button class="close-list" @click="$emit('close')"><i class="icon-cross"></i></button>
    <div class="list-wrapper">
      <BookmarkView v-for="bookmark in sorted" :key="bookmark.bookId" :bookmark="bookmark" />
    </div>
  </div>
</template>

<script>
import BookmarkView from "./BookmarkView";

export default {
  components: {
    BookmarkView
  },
  props: ['bookmarks'],
  computed: {
    sorted() {
      return [...this.bookmarks].sort((b1, b2) => {
        if (b1.updated && !b2.updated) return -1;
        if (!b1.updated && b2.updated) return 1;

        if (b1.updated && b2.updated) {
          if (b1.updated.$date > b2.updated.$date) return -1;
          if (b1.updated.$date < b2.updated.$date) return 1;
        }

        if (b1.status > b2.status) return 1;
        if (b1.status < b2.status) return -1;

        if (b1.is_last > b2.is_last) return 1;
        if (b1.is_last < b2.is_last) return -1;
      });
    }
  }
};
</script>

<style>
#bookmarks-list {
  position: fixed;
  top: 2em;
  bottom: 2em;
  left: 50%;
  width: 85%;
  margin-left: -42%;
  font-size: 0.9em;
  padding-right: 7px;
  background: #faf4ea;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  z-index: 9999;
}

.list-wrapper {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}

.close-list {
  position: absolute;
  right: 0;
  top: 5px;
  background: transparent;
  border: none;
  outline: none;
}

#bookmarks-list .list-wrapper::-webkit-scrollbar {
  width: 12px;
  background-color: transparent;
}

#bookmarks-list .list-wrapper::-webkit-scrollbar-track {
  margin-top: 30px;
  margin-bottom: 5px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

#bookmarks-list .list-wrapper::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>
