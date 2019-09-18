<template>
  <div id="app">
    <Meganav/>
  </div>
</template>

<script>
import Meganav from "@/components/meganav";

export default {
  name: "App",
  components: {
    Meganav
  }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: black;
}
html, body {
  margin: 0;
}
</style>
