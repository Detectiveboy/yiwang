<template lang='pug'>
  div(id="app")
    router-view
</template>
<script>
export default {};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  overflow-x: hidden;
}
li {
  list-style: none;
  font-size: 10px;
}
#app {
  width: 100%;
}
.container {
  width: 80%;
  margin: 0 auto;
}
</style>