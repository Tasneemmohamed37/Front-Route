export interface APIResponseVM {
    success: boolean,
    data: any ,
    messages : string[],
    pageNum?: number,
    totalPages?:number,
    itemsPerPage?:number,
}
