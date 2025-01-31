import { Controller, Get } from '@nestjs/common';
import { FileService } from '../file/file.service';
import { File } from '../file/file.entity';

@Controller('files')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get()
  async findAll(): Promise<File[]> {
    return this.fileService.findAll();
  }
}
