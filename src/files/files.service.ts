import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import FormData from 'form-data';
import { UploadBodyDto, UpdateFileDto } from './dto/file.dto';

@Injectable()
export class FilesService {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.FILES_SERVICE_URL,
      timeout: 10000,
    });
  }

  async upload(file: Express.Multer.File, body: UploadBodyDto) {
    try {
      const formData = new FormData();
      formData.append('file', file.buffer, file.originalname);
      formData.append('model_type', body.model_type);
      formData.append('model_id', String(body.model_id));
      formData.append('file_type', body.file_type ?? '');
      formData.append('user_updated_id', String(body.user_updated_id));
      const response = await this.client.post('/files/upload', formData, {
        headers: { ...formData.getHeaders() },
      });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findAll() {
    try {
      const response = await this.client.get('/files');
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findByModel(params: {
    model_type: string;
    model_id: number;
    file_type?: string;
  }) {
    try {
      const response = await this.client.get('/files/model', { params });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.client.get(`/files/${id}`);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async update(id: number, data: UpdateFileDto) {
    try {
      const response = await this.client.patch(`/files/${id}`, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async delete(id: number) {
    try {
      const response = await this.client.delete(`/files/${id}`);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async deleteByModel(modelType: string, modelId: number, fileType?: string) {
    try {
      const response = await this.client.delete(
        `/files/model/${modelType}/${modelId}`,
        {
          params: fileType ? { file_type: fileType } : undefined,
        },
      );
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  private handleError(error: any): never {
    if (error.response) {
      throw new HttpException(
        error.response.data?.message || 'Error from upstream service',
        error.response.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    throw new HttpException(
      'Service unavailable',
      HttpStatus.SERVICE_UNAVAILABLE,
    );
  }
}
