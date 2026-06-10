import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class FilesService {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.FILES_SERVICE_URL || 'http://localhost:3004',
      timeout: 10000,
    });
  }

  async upload(formData: FormData) {
    const response = await this.client.post('/files/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  }

  async findAll() {
    const response = await this.client.get('/files');
    return response.data;
  }

  async findByModel(params: { model_type: string; model_id: number; file_type?: string }) {
    const response = await this.client.get('/files/model', { params });
    return response.data;
  }

  async findOne(id: number) {
    const response = await this.client.get(`/files/${id}`);
    return response.data;
  }

  async update(id: number, data: any) {
    const response = await this.client.patch(`/files/${id}`, data);
    return response.data;
  }

  async delete(id: number) {
    const response = await this.client.delete(`/files/${id}`);
    return response.data;
  }

  async deleteByModel(modelType: string, modelId: number, fileType?: string) {
    const response = await this.client.delete(`/files/model/${modelType}/${modelId}`, {
      params: fileType ? { file_type: fileType } : undefined,
    });
    return response.data;
  }
}