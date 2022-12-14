import { AppState } from "../AppState.js";
import { api } from "./AxiosService.js";

class DeckCardsService {
  async createDeckCard(deckCard) {
    const res = await api.post("api/deckCards", deckCard);
    // console.log(res.data);
    AppState.deckCards.push(res.data);
  }

  async getDeckCards(deckId) {
    const res = await api.get("api/decks/" + deckId + "/deckCards");
    AppState.deckCards = res.data;
    // console.log('Deck Cards',res.data)
  }

  async removeCard(cardId) {
    const res = await api.delete("api/deckCards/" + cardId);
    AppState.deckCards = AppState.deckCards.filter((c) => c.id != cardId);
    return res;
  }
}
export const deckCardsService = new DeckCardsService();
