
import Storage, { LOCAL_STORAGE_KEY } from "../../src/api/storage";

class LocalStorageMock {
    constructor(storage = {}) {
        this.storage = storage;
    }

    setItem(key, value) {
        this.storage[key] = value || "";
    }

    getItem(key) {
        return this.storage[key] || null;
    }

    removeItem(key) {
        delete this.storage[key];
    }

    key(i) {
        const keys = Object.keys(this.storage);

        return keys[i] || null;
    }

    clear() {
        this.storage = {};
    }
}

const localStorage = new LocalStorageMock();
const storage = new Storage(localStorage);

describe("my beverage", () => {
    it("storage/get default storage", () => {
        expect(storage.json()).toEqual({ accessToken: "", feedZoom: "x3" });
    });

    it("storage/get storage saved in local storage", () => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ accessToken: "ABC", feedZoom: "x1" }));
        expect(storage.json().accessToken).toBe("ABC");
        expect(storage.json().feedZoom).toBe("x1");
    });

    it("storage/save storage in local storage", () => {
        storage.save({ accessToken: "123" });
        expect(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).accessToken).toBe("123");
    });

    it("storage/save storage in local storage merge", () => {
        localStorage.clear();
        storage.save({ a: "a" });
        storage.save({ b: "b" });
        expect(localStorage.getItem(LOCAL_STORAGE_KEY)).toEqual("{\"a\":\"a\",\"b\":\"b\"}");
    });

    it("storage/storage clear local storage", () => {
        storage.save({ a: "a" });
        storage.clear();
        expect(localStorage.getItem(LOCAL_STORAGE_KEY)).toBe(null);
    });
});
