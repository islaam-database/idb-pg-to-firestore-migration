import admin = require("firebase-admin");
import { CREDENTIALS } from "./credentials";

/** Helps manage writing data to firestore */
export class IslaamDBToFirestore {
    /** The database reference */
    private db: FirebaseFirestore.Firestore;
    constructor() {
        const certificate = CREDENTIALS.firestoreServiceAccount;
        admin.initializeApp({
            credential: admin.credential.cert({
                clientEmail: "migrate@islaam-database-e5a0e.iam.gserviceaccount.com",
                privateKey: certificate.private_key,
                projectId: certificate.project_id,
            }),
        });
        this.db = admin.firestore();
    }
    /**
     * Adds titles to the firestore database
     * @param titles The titles to add to the firestore database
     */
    public async addTitles(titles: Title[]) {
        for (const title of titles) {
            const fixed = {};
            for (const key in title) {
                if (title[key] != null) {
                    fixed[key] = title[key];
                }
            }
            const id = String(title.id);
            await this.db.collection("titles").doc(id).delete();
            await this.db.collection("titles").doc(title.name).set(fixed);
        }
    }
    /**
     * Adds generations to the firestore database
     * @param generations The generations to add to the firestore database
     */
    public async addGenerations(generations: Generation[]) {
        for (const generation of generations) {
            const fixed = {};
            for (const key in generation) {
                if (generation[key] != null) {
                    fixed[key] = generation[key];
                }
            }
            const id = String(generation.id);
            await this.db.collection("generations").doc(generation.name).set(fixed);
        }
    }
    /**
     * Adds students to the firestore database
     * @param students The students to add to the firestore database
     */
    public async addStudents(students: Student[]) {
        for (const student of students) {
            const fixed = {};
            for (const key in student) {
                if (student[key] != null) {
                    fixed[key] = student[key];
                }
            }
            const id = String(student.id);
            await this.db.collection("students").doc(id).set(fixed);
        }
    }
    /**
     * Adds recommendations to the firestore database
     * @param recommendations The recommendations to add to the firestore database
     */
    public async addRecommendations(recommendations: Recommendation[]) {
        for (const recomendation of recommendations) {
            const fixed = {};
            for (const key in recomendation) {
                if (recomendation[key] != null) {
                    fixed[key] = recomendation[key];
                }
            }
            const id = String(recomendation.id);
            await this.db.collection("recommendations").doc(id).set(fixed);
        }
    }
    /**
     * Adds people to the firestore database
     * @param people The people to add to the firestore database
     */
    public async addPeople(people: Person[]) {
        for (const person of people) {
            const fixed = {};
            for (const key in person) {
                if (person[key] != null) {
                    fixed[key] = person[key];
                }
            }
            const id = String(person.id);
            await this.db.collection("people").doc(id).set(fixed);
        }
    }
    /**
     * Adds sects to the firestore database
     * @param people The sects to add to the firestore database
     */
    public async addSects(sects: Sect[]) {
        for (const sect of sects) {
            const fixed = {};
            for (const key in sect) {
                if (sect[key] != null) {
                    fixed[key] = sect[key];
                }
            }
            const id = String(sect.name);
            await this.db.collection("sects").doc(String(sect.id)).delete();
            await this.db.collection("sects").doc(id).set(fixed);
        }
    }

}
