export interface IBlog {
    title: string;
    publishedAt: string;
    description: string;
    banner: string;
    tags: string;
    slug: string;
    source: string;
}

export interface IProject {
    title: string;
    publishedAt: string;
    description: string;
    images: string;
    tags: string;
    slug: string;
    source: string;
    duration: string;
}

export interface AnchorArray {
    title: string;
    level: number;
    anchor: string;
    position: number;
}
