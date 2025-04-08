export function initializeDB(){
    const request = indexedDB.open("TaskDB", 1);

    request.onupgradeneeded = function (event) {
        const db = event.target.result
        const store  = db.createObjectStore("tasks", {keyPath: "id"})
        console.log("Object store created");
    }
}