export interface Iteam {
    name: string,
    description:string,
    category: string,
    file: {
            fileName: string | null,                   
            fileReader: string| ArrayBuffer| null;
        }
}  
