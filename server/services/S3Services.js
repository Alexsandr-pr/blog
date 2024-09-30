const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");
const path = require("path");
require("dotenv").config(); 

class S3Service {
    constructor() {
        this.bucketName = process.env.AWS_BUCKET_NAME;
        this.s3Client = new S3Client({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
        });
    }

    async uploadFile(file) {
        try {
            const uploadParams = {
                Bucket: this.bucketName,
                Key:  `blog/${file.name}`,
                Body: file.data, 
                ContentType: file.mimetype,

            };

            const command = new PutObjectCommand(uploadParams);
            const response = await this.s3Client.send(command);
            return response;
        } catch (error) {
            console.error("Ошибка при загрузке файла в S3:", error);
            throw error;
        }
    }
}


module.exports = S3Service;
