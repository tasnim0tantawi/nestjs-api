import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AuthModule {
  constructor(private authService: AuthService) {}
}
