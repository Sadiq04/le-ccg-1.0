import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Game from "../views/Game.vue";
import Play from "../views/Play.vue";
import Guide from "../views/Guide.vue";
import DeckBuilder from "../views/DeckBuilder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/game/:deckID",
    name: "Game",
    component: Game,
  },
  {
    path: "/play",
    name: "Play",
    component: Play,
  },
  {
    path: "/guide",
    name: "Guide",
    component: Guide,
  },
  {
    path: "/deckBuilder",
    name: "DeckBuilder",
    component: DeckBuilder,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
