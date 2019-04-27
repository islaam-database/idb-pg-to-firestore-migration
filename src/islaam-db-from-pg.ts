import { Client } from "pg";
import { CREDENTIALS } from "./credentials";

/**
 * A class to manage the data in the postgres database
 */
export class IslaamDBFromPG {
    public people: Person[];
    public sects: Sect[];
    public recommendations: Recommendation[];
    public generations: Generation[];
    public students: Student[];
    public title: Title[];
    /** Whether this class has been initialized */
    private initialized = false;

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
        this.sects = (await client.query("SELECT * FROM sect")).rows;
        this.title = (await client.query("SELECT * FROM title")).rows;
        this.people = (await client.query("SELECT * FROM person")).rows;
        this.students = (await client.query("SELECT * FROM students")).rows;
        this.generations = (await client.query("SELECT * FROM generation")).rows;
        this.recommendations = (await client.query("SELECT * FROM recommendation")).rows;
    }
}
