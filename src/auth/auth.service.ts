import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private users: { id: number; username: string; password: string }[] = [];

  async register(username: string, password: string) {
    const existing = this.users.find(user => user.username === username);
    if (existing) {
      throw new Error('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { id: Date.now(), username, password: hashedPassword };
    this.users.push(user);
    return user;
  }

  async validateUser(username: string, password: string) {
    const user = this.users.find(user => user.username === username);
    if (!user) {
      return null;
    }
    const isValid = await bcrypt.compare(password, user.password);
    return isValid ? user : null;
  }

  async login(user: any) {
    return { message: 'Logged in', token: `fake-jwt-token-for-${user.id}`, user };
  }
}
