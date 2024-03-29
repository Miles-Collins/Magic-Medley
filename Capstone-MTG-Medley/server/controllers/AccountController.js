import { Auth0Provider } from "@bcwdev/auth0provider";
import { accountService } from "../services/AccountService";
import { cardsService } from "../services/CardsService.js";
import { decksService } from "../services/DecksService.js";
import { membersService } from "../services/MembersService";
import BaseController from "../utils/BaseController";

export class AccountController extends BaseController {
  constructor() {
    super("account");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getUserAccount)
      .put("", this.edit)
      .get("/cards", this.getAllAccountCards)
      .get("/cards/:cardId", this.getCardById)
      .post("/cards", this.createCard)
      .put("/cards/:cardId", this.updateCard)
      .delete("/cards/:cardId/deleteAll", this.deleteCardEverywhere)
      .delete("/cards/:cardId", this.deleteCard)
      .get("/members", this.getAccountGuildMemberships);
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo);
      res.send(account);
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      const accountBody = req.body
      accountBody.id = req.userInfo.id
      const account = await accountService.edit(req.body);
      return res.send(account);
    } catch (error) {
      next(error);
    }
  }

  async getAllAccountCards(req, res, next) {
    try {
      const cards = await cardsService.getAllAccountCards(req.userInfo.id);
      return res.send(cards);
    } catch (error) {
      next(error);
    }
  }

  async getCardById(req, res, next) {
    try {
      const card = await cardsService.getCardById(req.params.cardId);
      return res.send(card);
    } catch (error) {
      next(error);
    }
  }

  async createCard(req, res, next) {
    try {
      req.body.accountId = req.userInfo.id;
      const card = await cardsService.createCard(req.body);
      return res.send(card);
    } catch (error) {
      next(error);
    }
  }

  async updateCard(req, res, next) {
    try {
      let cardData = req.body;
      cardData.accountId = req.userInfo.Id;
      const card = await cardsService.updateCard(req.params.cardId, cardData);
      return res.send(card);
    } catch (error) {
      next(error);
    }
  }
  async deleteCard(req, res, next) {
    try {
      const response = await cardsService.deleteCard(req.params.cardId);
      return res.send(response);
    } catch (error) {
      next(error);
    }
  }
  async deleteCardEverywhere(req, res, next) {
    try {
      const response = await cardsService.deleteCardEverywhere(
        req.params.cardId
      );
      return res.send(response);
    } catch (error) {
      next(error);
    }
  }


  async getAccountGuildMemberships(req, res, next) {
    try {
      const memberships = await membersService.getAccountGuildMemberships(
        req.params.id
      );
      return res.send(memberships);
    } catch (error) {
      next(error);
    }
  }
}
