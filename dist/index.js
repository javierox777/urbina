"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("./db");
const main = () => {
    app_1.app.listen(app_1.app.get("PORT_WEB"));
    console.log("el servidor esta en el puert", app_1.app.get("PORT_WEB"));
};
main();
