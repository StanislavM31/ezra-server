import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    // Здесь должна быть реализована валидация токена.
    // Для демонстрации всегда разрешаем доступ и добавляем фиктивного пользователя.
    const request = context.switchToHttp().getRequest();
    request.user = { id: 1, username: 'dummy' }; // фиктивный, для примера
    return true;
  }
}
