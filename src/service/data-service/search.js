'use strict';

class SearchService {
  constructor(posts) {
    this._posts = posts;
  }

  getSearchDataByQuery(query) {
    return this._posts.filter((post) => post.title.toUpperCase().includes(query.toUpperCase()));
  }
}

module.exports = SearchService;
