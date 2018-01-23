<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  height: 100vh;
  background: #00AEEF;
}

#app {
  min-height: 50vh;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}

.bordered {
  -webkit-box-shadow: 3px 3px 10px 0px rgba(255, 255, 255, 0.75);
  -moz-box-shadow:    3px 3px 10px 0px rgba(255, 255, 255, 0.75);
  box-shadow:         3px 3px 10px 0px rgba(255, 255, 255, 0.75);
  padding: 40px;
  background: white;
}

</style>
