import base from './base';

class SearchSvc {
  constructor(base) {
    this._base = base;
    this.SEARCH_PATH = '/search';
  }

  async search({ q, index }) {
    const { data } = await this._base.get(this.SEARCH_PATH, {
      params: {
        q,
        index,
      },
    });

    return data;
  }
}

const searchInstance = new SearchSvc(base);

export default searchInstance;
