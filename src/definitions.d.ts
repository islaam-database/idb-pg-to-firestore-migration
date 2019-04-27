interface Person {
    /** Unique ID */
    id: number;
    /** Source URL for this information */
    infoSource: string;
    /** The year they were born in Hijri calendar */
    birthYear: number;
    /** Additional comments */
    comments: string;
    /** The year they died in Hijri calendar */
    deathYear: number;
    /** The ID of the generation they were from */
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

interface Generation {
    /** Unique ID */
    id: number;
    /** The generation name */
    name: string;
    /** The first year of the generation */
    beginningYear: number;
    /** The last year of the generation */
    endYear: number;
    /** The source for this information */
    infoSource: string;
}

interface Recommendation {
    /** Unique ID */
    id: number;
    /** The ID of the one recommending */
    recommender: number;
    /** The ID of the one being recommended */
    recommendee: number;
    /** The source for this information */
    source: string;
    /** The ID of the title */
    title: number;
}

interface Title {
    /** Unique ID */
    id: number;
    /** The title name */
    name: string;
    /** The title name in Arabic */
    nameArabic: string;
}

interface Student {
    /** Unique ID */
    id: number;
    /** The ID of the teacher */
    teacher: number;
    /** The ID of the student */
    student: number;
    /** The terminology used to determine the teacher-student relationship */
    terminology: number;
    /** The source for this information */
    source: string;
}

interface Sect {
    /** Unique ID */
    id: number;
    /** The sect name */
    name: string;
    /** The year the sect started */
    originYear: number;
    /** The year the sect ended */
    endYear: number;
    /** The parent sect of this sect */
    parentSect: number;
    /** The ID of the founder of this sect */
    founder: number;
    /** A description of this sect */
    description: string;
}