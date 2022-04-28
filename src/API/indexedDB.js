const indexedDB = 
window.indexedDB || 
window.mozIndexedDB ||
window.webkitIndexedDB ||
window.msIndexedDB ||
window.shimIndexedDB;

const request = indexedDB.open("CarsDataBase", 1);

request.onerror = function (event) {
    console.error("An error ocurred with IndexedDB");
    console.log(event);
};

request.onupgradeneeded = function () {
    const db = request.result;
    const store = db.createObjectStore("cars", {keyPath: "id"});
    store.createIndex("cars_color", ["color"], {unique: false});
    store.createIndex("color_and_make", ["color", "make"], {unique: false});
};

request.onsuccess = function () {
    const db = request.result;
    const transaction = db.transaction("cars", "readwrite");

    const store = transaction.objectStore("cars");
    const colorIndex = store.index("cars_color");
    const makeModelIndex = store.index("color_and_make");

    store.put({ id: 1, color: "vit", make: "BMW"});
    store.put({ id: 2, color: "svart", make: "Honda"});
    store.put({ id: 3, color: "svart", make: "Crescent"});

    const idQuery = store.get(4);

}