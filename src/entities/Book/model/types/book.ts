type VolumeInfo = {
    title?: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    categories?: string[];
    imageLinks?: {
        smallThumbnail?: string;
        thumbnail?: string;
        extraLarge?: string;
        large?: string;
        medium?: string;
        small?: string;
    }

}
export interface Book {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
}
