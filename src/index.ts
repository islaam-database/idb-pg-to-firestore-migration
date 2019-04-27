import { IslaamDBFromPG } from "./islaam-db-from-pg";
import { IslaamDBToFirestore } from "./islaam-db-to-firestore";

(async () => {
    const data = new IslaamDBFromPG();
    await data.init();
    const islaamDBToFirestore = new IslaamDBToFirestore();
    // await islaamDBToFirestore.addPeople(data.people);
    // await islaamDBToFirestore.addSects(data.sects);
    // await islaamDBToFirestore.addRecommendations(data.recommendations);
    // await islaamDBToFirestore.addStudents(data.students);
    // await islaamDBToFirestore.addGenerations(data.generations);
    await islaamDBToFirestore.addTitles(data.title);
})();
