import { createRouter, createWebHashHistory } from "vue-router";
import { authGuard, authSettled } from "@bcwdev/auth0provider-client";

function loadPage(page) {
  return () => import(`./pages/${page}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: loadPage("HomePage"),
  },
  {
    path: "/collection",
    name: "Collection",
    component: loadPage("CollectionPage"),
    beforeEnter: authSettled,
  },
  {
    path: "/search",
    name: "Search",
    component: loadPage("SearchPage"),
  },
  {
    path: "/guild",
    name: "Guild",
    component: loadPage("GuildPage"),
    beforeEnter: authSettled,
  },
  {
    path: "/guild/:guildId",
    name: "GuildDetails",
    component: loadPage("GuildDetailsPage"),
    beforeEnter: authGuard,
  },
  {
    path: "/profile/:profileId",
    name: "Profile",
    component: loadPage("ProfilePage"),
    beforeEnter: authSettled,
  },
  {
    path: "/account",
    name: "Account",
    component: loadPage("AccountPage"),
    beforeEnter: authGuard,
  },
  {
    path: "/:deckId",
    name: "DeckDetails",
    component: loadPage("DeckCollectionPage"),
    beforeEnter: authSettled,
  },
];

export const router = createRouter({
  linkActiveClass: "router-link-active",
  linkExactActiveClass: "router-link-exact-active",
  history: createWebHashHistory(),
  routes,
});
