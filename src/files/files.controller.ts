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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { FileQueryDto, UploadBodyDto, UpdateFileDto } from './dto/file.dto';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: UploadBodyDto,
  ) {
    return this.filesService.upload(file, body);
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
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateFileDto: UpdateFileDto,
  ) {
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
