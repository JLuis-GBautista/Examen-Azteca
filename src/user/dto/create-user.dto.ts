import {
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  IsStrongPassword,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(1, { message: 'El nombre es requerido' })
  fullName: string;

  @IsOptional()
  @IsInt()
  @Min(12, { message: 'El usuario debe tener al menos 12 años' })
  @Max(200, { message: 'El usuario debe tener al menos 200 años' })
  age: number;

  @IsEmail({}, { message: 'Email must be a valid email address' })
  email: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
    minUppercase: 1,
  })
  password: string;
}
