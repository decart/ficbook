<template>
  <div id="bookmarks-wrapper">
    <div id="bookmarks-control-panel">
      <div id="loading-indicator" v-if="is_loading">Loading</div>
      <button id="bookmarks-list-button">📖</button>
      <button id="upsert-bookmark-button">📑</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    bookmarks: state => state.bookmarks,
    is_loading: state => state.is_loading
  }),
  created () {
    this.$store.dispatch('getBookmarks')
  }
}
</script>

<style lang="css">
  #bookmarks-control-panel {
    position: fixed;
    top: 2em;
    left: 2em;
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

  #bookmarks-list-button {
    border-radius: 1em 0 0 1em;
  }

  #upsert-bookmark-button {
    border-radius: 0 1em 1em 0;
  }

  #bookmarks-control-panel button {
    border: none;
    outline: none;
    background: transparent;
  }

  #bookmarks-control-panel button:hover {
    background: #fff;
  }
</style>
