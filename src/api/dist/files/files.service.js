"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const storage_blob_1 = require("@azure/storage-blob");
let FilesService = class FilesService {
    async uploadFile(file, orderId) {
        require('dotenv').config();
        const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
        console.log(process.env.AZURE_STORAGE_CONTAINER_NAME);
        const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME || 'attachments';
        const blobServiceClient = storage_blob_1.BlobServiceClient.fromConnectionString(connectionString);
        const containerClient = blobServiceClient.getContainerClient(containerName);
        const safeOrderId = orderId || 'unassigned';
        const blobName = `${safeOrderId}/${Date.now()}-${file.originalname}`;
        const blockBlobClient = containerClient.getBlockBlobClient(blobName);
        await blockBlobClient.uploadData(file.buffer, {
            blobHTTPHeaders: { blobContentType: file.mimetype },
        });
        return {
            orderId: safeOrderId,
            fileName: file.originalname,
            blobName,
            size: file.size,
            contentType: file.mimetype,
            url: blockBlobClient.url,
            status: 'Uploaded',
        };
    }
};
exports.FilesService = FilesService;
exports.FilesService = FilesService = __decorate([
    (0, common_1.Injectable)()
], FilesService);
//# sourceMappingURL=files.service.js.map