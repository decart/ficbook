<template>
  <div id="app">
    <ControlPanel></ControlPanel>
  </div>
</template>

<script>
import ControlPanel from "./components/ControlPanel";

require("./bootstrap");

export default {
  name: "app",
  components: {
    ControlPanel
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.line-wrapper {
  min-height: 0.5em;
}
</style>
