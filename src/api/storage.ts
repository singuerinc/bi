export const LOCAL_STORAGE_KEY = "bi";

export default class Storage {
    constructor(storage = window.localStorage) {
        this.storage = storage;
    }

    _getLocalStorage() {
        return JSON.parse(this.storage.getItem(LOCAL_STORAGE_KEY) || "{}");
    }

    json() {
        const defaultStorage = {
            accessToken: "",
            feedZoom: "x3"
        };
        const localStorage = this._getLocalStorage();

        return Object.assign(defaultStorage, localStorage);
    }

    save(data) {
        const newData = Object.assign(this._getLocalStorage(), data);

        this.storage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
    }

    clear() {
        this.storage.clear();
    }

    saveAccessToken(token) {
        this.save({ accessToken: token });
    }

    saveFeedZoom(zoom) {
        this.save({ feedZoom: zoom });
    }
}
