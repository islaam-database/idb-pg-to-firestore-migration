interface Person {
    /** Unique id */
    id: number;
    /** Source URL for this information */
    infoSource: string;
    /** The year they were born in Hijri calendar */
    birthYear: number;
    /** Additional comments */
    comments: string;
    /** The year they died in Hijri calendar */
    deathYear: number;
    /** The id of the generation they were from */
    generation: number;
    /** Their kunya */
    kunya: string;
    /** The location they lived in */
    location: string;
    /** Their name */
    name: string;
    /** Their id in Taqreeb at-Tahdheeb of ibn Hajr al-'Asqalaanee, may Allaah have mercy on him */
    taqreebId: number;
}