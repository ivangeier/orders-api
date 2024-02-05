import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

// TODO - CREATE DATABASE TO STORE USERS
const users = [
  {
    id: 1,
    username: 'bob',
    password: 'bob',
  },
  {
    id: 2,
    username: 'daniel',
    password: 'daniel',
  },
  {
    id: 3,
    username: 'amanda',
    password: 'amanda',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  //! THIS IS THE NOT SECURE IMPLEMENTATION - STUDY CASE ONLY (WE SHOULD USE A MORE SECURE IMPLEMENTATION LIKE BCRYPT)
  // TODO - ADD A SECURE IMPLEMENTATION
  login(username: string, password: string) {
    const user = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
