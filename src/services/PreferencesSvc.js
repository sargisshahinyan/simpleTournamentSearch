class PreferencesSvc {
  cachedPreferences = null;
  STORAGE_KEY = 'preferences';

  async savePreferences(data) {
    if (this.cachedPreferences === data) return;

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
  }

  async restorePreferences() {
    try {
      if (typeof localStorage !== 'object') return [];

      const persisted = localStorage.getItem(this.STORAGE_KEY);
      return persisted ? JSON.parse(persisted) : [];
    } catch (e) {
      return [];
    }
  }
}

const preferencesInstance = new PreferencesSvc();

export default preferencesInstance;
