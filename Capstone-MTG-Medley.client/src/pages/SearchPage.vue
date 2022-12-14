<template>
  <header class="fixed-top img-text">
    <Navbar />
  </header>

  <section class="row bg-search">
    <SearchFilters />
    <div v-if="searchedCards.length" class="col-12 card-grid bg-search">
      <div v-for="c in searchedCards" :key="c.id" class="grid-item">
        <SearchedCards :card="c" />
      </div>
      <div v-if="nextPage" class="row justify-content-center py-3">
        <button
          @click="changePage(nextPage, page + 1)"
          class="btn btn-outline-light w-50"
        >
          More Results
        </button>
      </div>
    </div>
    <div v-else class="offset-3 col-8 text-center center-page">
      <main class="cards-wrapper">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </main>
    </div>
  </section>
</template>

<script>
import SearchFilters from "../components/SearchFilters.vue";
import SearchForm from "../components/SearchForm.vue";
import SearchedCards from "../components/SearchedCards.vue";
import { AppState } from "../AppState";
import { computed, ref } from "@vue/reactivity";
import { logger } from "../utils/Logger.js";
import { cardsService } from "../services/CardsService.js";
import ClearNavBar from "../components/ClearNavBar.vue";
import Navbar from "../components/Navbar.vue";
import CollectionFilter from "../components/CollectionFilter.vue";
import LoadingImg from "../components/LoadingImg.vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const page = ref(1);
    const router = useRouter();
    const route = useRoute();

    return {
      page,
      card: computed(() => AppState.card),
      searchedCards: computed(() =>
        AppState.searchedCards.slice(page.value - 1, 175 * page.value - 1)
      ),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),

      async changePage(url, num) {
        try {
          await cardsService.changePage(url);
          page.value = num;
        } catch (error) {
          logger.log(error);
        }
      },
    };
  },
  components: {
    SearchFilters,
    SearchForm,
    SearchedCards,
    Navbar,
    LoadingImg,
  },
};
</script>

<style lang="scss" scoped>
.card-grid {
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1em;
  margin-top: 1em;
  min-height: 100vh;
  max-width: 100vw;

  .grid-item {
    align-self: center;
    justify-self: center;
    // max-height: 15px;
  }
}

.img-text {
  color: whitesmoke !important;
  text-shadow: 1px 1px 3px black;
}

.bg-search {
  background-color: rgba(6, 19, 32, 255);
  min-height: 120vh;
}

main {
  flex-grow: 1;
  display: flex;
  align-content: center;
  justify-content: center;
}

.cards-wrapper {
  position: relative;
}

.card {
  height: 285px;
  width: 225px;
  background-color: black;
  background-image: url(https://preview.redd.it/jd2sdm59hdo31.png?auto=webp&s=1990c610a6e2bf9b3120cb6677a94cb58d50045a);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  position: absolute;
  animation: shuffle 2s ease alternate infinite;
  box-shadow: 0px 0px 5px black;
}

.card:nth-child(1) {
  animation-delay: 0.2s;
}

.card:nth-child(2) {
  animation-delay: 0.3s;
}

.card:nth-child(3) {
  animation-delay: 0.4s;
}

.card:nth-child(4) {
  animation-delay: 0.5s;
}

.card:nth-child(5) {
  animation-delay: 0.6s;
}

.card:nth-child(6) {
  animation-delay: 0.7s;
}

@keyframes shuffle {
  0% {
    transform: translate(0px, 0px);
  }

  10% {
    transform: translate(-300px, 0px);
  }

  90% {
    transform: translate(-200px, 0px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.center-page {
  position: fixed;
  display: flex;
  // align-items: baseline;
  margin-top: 50vh;
  justify-content: center;
}
</style>
