import SearchSvc from './SearchSvc';

class TournamentsSvc {
  async getTournaments(q) {
    try {
      const [{ documents }] = await SearchSvc.search({
        q,
        index: 'tournament',
      });

      return documents;
    } catch (e) {
      return [];
    }
  }
}

const tournamentsInstance = new TournamentsSvc();

export default tournamentsInstance;
