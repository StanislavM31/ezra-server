// Сущность для связи "кто выполнил чью задачу"
export class ItemUser {
  id: number;
  itemId: number;
  userId: number;
  completedAt: Date;
}
