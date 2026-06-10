import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  Inject,
  ParseIntPipe,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { FilesService } from './files.service';
import { FileQueryDto } from './dto/file.dto';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  async uploadFile(@Req() req: Request) {
    const formData = req.body;
    return this.filesService.upload(formData);
  }

  @Get()
  findAll() {
    return this.filesService.findAll();
  }

  @Get('model')
  findByModel(@Query() query: FileQueryDto) {
    return this.filesService.findByModel(query);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.filesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateFileDto: any) {
    return this.filesService.update(id, updateFileDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.filesService.delete(id);
  }

  @Delete('model/:modelType/:modelId')
  deleteByModel(
    @Param('modelType') modelType: string,
    @Param('modelId', ParseIntPipe) modelId: number,
    @Query('file_type') fileType?: string,
  ) {
    return this.filesService.deleteByModel(modelType, modelId, fileType);
  }
}