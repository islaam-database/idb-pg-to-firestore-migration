import { Client } from "pg";
import { CREDENTIALS } from "./credentials";

/**
 * A class to manage the data in the postgres database
 */
export class IslaamDBFromPG {
    /** Whether this class has been initialized */
    private initialized = false;
    /** The data */
    private people: Person[];

    /**
     * Connects to the database and gets the data
     */
    public async init() {
        const client = new Client({
            database: CREDENTIALS.postgres.database,
            host: CREDENTIALS.postgres.host,
            password: CREDENTIALS.postgres.password,
            port: CREDENTIALS.postgres.port,
            ssl: true,
            user: CREDENTIALS.postgres.username,
        });

        await client.connect();

        this.people = (await client.query("SELECT * FROM person")).rows;
        debugger;
    }
}
