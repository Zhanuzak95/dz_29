import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  @IsNotEmpty({ message: 'Title should not be empty' })
  title: string;
}
