
export interface Book {
    id: string;
    title: string;
    author: string;
    description: string;
    growthPlanId: string;
    thumbnail: string;
    pageCount: bigint;
    userId: string;
    created: Date;
}
