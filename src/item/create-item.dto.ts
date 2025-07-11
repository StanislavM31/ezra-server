export class CreateItemDto {
  readonly name: string;
  readonly description?: string;
  readonly userId?: number; // id пользователя, владелец item
}
