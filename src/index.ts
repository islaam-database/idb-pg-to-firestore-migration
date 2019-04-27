import { IslaamDBFromPG } from "./islaam-db-from-pg";

(async () => {
    const data = new IslaamDBFromPG();
    await data.init();
})();
