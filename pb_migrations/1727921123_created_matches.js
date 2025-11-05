/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y5n551w16pr7thx",
    "created": "2024-10-03 02:05:23.114Z",
    "updated": "2024-10-03 02:05:23.114Z",
    "name": "matches",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zj9qpbri",
        "name": "matchName",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y5n551w16pr7thx");

  return dao.deleteCollection(collection);
})
