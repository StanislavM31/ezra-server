import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {

    const request = context.switchToHttp().getRequest();
    request.user = { id: 1, username: 'dummy' }; //проверка по токену
    return true;
  }
}
