"use strict";
//firebase-config.ts
// Description: Imports the Firebase configurations and uses it to initialize the Firebase SDK.
// Exports auth to be used in other files.
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const app_1 = require("firebase-admin/app");
const auth_1 = require("firebase-admin/auth");
const serviceAccount = require("./serviceAccountKey.json");
// import serviceAccount from "./serviceAccountKey.json";
const app = (0, app_1.initializeApp)({
    credential: (0, app_1.cert)(serviceAccount),
});
const auth = (0, auth_1.getAuth)(app);
exports.auth = auth;
//# sourceMappingURL=firebase-config.js.map