'use strict';

const {Router} = require(`express`);
const categories = require(`./categories`);
const offers = require(`./offers`);
const search = require(`./search`);

const {getMockData} = require(`../lib/get-mock-data`);
const {
  CategoryService,
  OfferService,
  CommentService,
  SearchService
} = require(`../data-service`);

const router = new Router();

(async () => {
  const mockData = await getMockData();

  categories(router, new CategoryService(mockData));
  offers(router, new OfferService(mockData), new CommentService());
  search(router, new SearchService(mockData));
})();

module.exports = router;
