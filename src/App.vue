<template>
  <div id="app">
    <ControlPanel></ControlPanel>
  </div>
</template>

<script>
import ControlPanel from "./components/ControlPanel";

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
</style>
