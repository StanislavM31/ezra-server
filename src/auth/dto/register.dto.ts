import { IsString, MinLength, MaxLength, Matches } from 'class-validator';
export class RegisterDto {
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(2)
/*   @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
    message: 'Пароль должен содержать минимум 8 символов, 1 заглавную букву и 1 цифру',
  }) */
  password: string;
}