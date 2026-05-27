import { FilesService } from './files.service';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    uploadFile(file: Express.Multer.File, orderId: string): Promise<{
        orderId: string;
        fileName: string;
        blobName: string;
        size: number;
        contentType: string;
        url: string;
        status: string;
    }>;
}
