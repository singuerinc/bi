import test from "ava";
import {LocalStorageMock} from "../_helpers";
import Storage, {LOCAL_STORAGE_KEY} from "../../src/api/storage";

const localStorage = new LocalStorageMock();
const storage = new Storage(localStorage);

test("storage/get default storage", t => {
    t.deepEqual(storage.json(), {access_token: "", feed_zoom: "x3"});
});


test("storage/get storage saved in local storage", t => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({access_token: "ABC", feed_zoom: "x1"}));
    t.is(storage.json().access_token, "ABC");
    t.is(storage.json().feed_zoom, "x1");
});

test("storage/save storage in local storage", t => {
    storage.save({access_token: "123"});
    t.is(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)).access_token, "123");
});

test("storage/save storage in local storage merge", t => {
    localStorage.clear();
    storage.save({a: "a"});
    storage.save({b: "b"});
    t.is(localStorage.getItem(LOCAL_STORAGE_KEY), '{"a":"a","b":"b"}');
});

test("storage/storage clear local storage", t => {
    storage.save({a: 'a'});
    storage.clear();
    t.is(localStorage.getItem(LOCAL_STORAGE_KEY), null);
});
