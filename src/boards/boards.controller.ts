import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get()
  findAll() {
    return this.boardsService.findAll();
  }

  @Post()
  create(
    @Body(new ValidationPipe({ whitelist: true }))
    createBoardDto: CreateBoardDto,
  ) {
    return this.boardsService.create(createBoardDto);
  }
}
