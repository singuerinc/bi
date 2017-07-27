export const LOCAL_STORAGE_KEY = "bi";

interface IStorage {
    getItem(key: string): string | null;
    setItem(key:string, value: any): any;
    clear(): void;
}

export default class Storage {
    public storage: IStorage;

    constructor(storage = window.localStorage) {
        this.storage = storage;
    }

    _getLocalStorage(): any {
        return JSON.parse(this.storage.getItem(LOCAL_STORAGE_KEY) || "{}");
    }

    json(): any {
        const defaultStorage = {
            accessToken: "",
            feedZoom: "x3"
        };
        const localStorage: any = this._getLocalStorage();

        return Object.assign(defaultStorage, localStorage);
    }

    save(data: any) {
        const newData: any = Object.assign(this._getLocalStorage(), data);

        this.storage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
    }

    clear() {
        this.storage.clear();
    }

    saveAccessToken(token: string) {
        this.save({ accessToken: token });
    }

    saveFeedZoom(zoom: string) {
        this.save({ feedZoom: zoom });
    }
}
