<template>
  <div style="height: 100vh">
    <router-link to="/play"><button style="position: absolute; top: 40%; left: 20%; height: 8vh; width: 25vh; font-size: 3vh">Play</button></router-link>
    <router-link to="/guide"><button style="position: absolute; top: 40%; left: 40%; height: 8vh; width: 25vh; font-size: 3vh">Guide</button></router-link>
    <router-link to="/deckBuilder"><button style="position: absolute; top: 40%; left: 60%; height: 8vh; width: 25vh; font-size: 3vh">Deck Builder</button></router-link>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
  },
};
</script>
