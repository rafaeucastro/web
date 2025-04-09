import { TransactionMode, TaskDBTables } from "./constants.js";
import { initializeDB } from "./index_database.js";
import { Log } from "./utils.js";

function getTaskStore(transactionMode) {
  return new Promise((resolve, reject) => {
    const request = initializeDB({
      databaseName: "TaskDB",
      objectStoreName: TaskDBTables.tasks,
    });

    request.onsuccess = (event) => {
      const db = event.target.result;

      let transaction;
      try {
        transaction = db.transaction(TaskDBTables.tasks, transactionMode);
      } catch (error) {
        Log.error(error);
        reject(error);
      }

      const store = transaction.objectStore(TaskDBTables.tasks);
      resolve(store);
    };

    request.onerror = (e) => {
      reject(e.target.error);
      alert("Erro ao acessar banco de dados!");
    };
  });
}

export async function save(task) {
  const store = await getTaskStore(TransactionMode.readwrite);

  const addRequest = store.add(task);

  addRequest.onsuccess = () => {
    console.log("Task added to DB!");
  };

  addRequest.onerror = (e) => {
    console.log("Error adding task", e.target.error);
  };
}

export async function loadTasksFromDB(callback) {
  const store = await getTaskStore(TransactionMode.readonly);
  const getAllRequest = store.getAll();

  getAllRequest.onsuccess = () => {
    const data = getAllRequest.result;
    callback(data, null);
  };

  getAllRequest.onerror = (e) => {
    console.log("Error reading tasks", e.target.error);
    callback(null, e.target.error);
  };
}
