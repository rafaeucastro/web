export function initializeDB({ databaseName, objectStoreName }) {
  const request = indexedDB.open(databaseName, 1);

  request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore(objectStoreName, { keyPath: "id", autoIncrement: true });
    console.log("Object store created");
  };

  return request;
}