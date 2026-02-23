// backend/src/user/dto/create-user.dto.ts
import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name!: string; // Added ! here

  @IsEmail()
  email!: string; // Added ! here

  @IsOptional()
  @IsString()
  password?: string; 
}