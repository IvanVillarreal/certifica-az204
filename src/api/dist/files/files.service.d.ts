export declare class FilesService {
    uploadFile(file: Express.Multer.File, orderId?: string): Promise<{
        orderId: string;
        fileName: string;
        blobName: string;
        size: number;
        contentType: string;
        url: string;
        status: string;
    }>;
}
