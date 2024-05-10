import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';

@Module({
  imports: [CacheModule.register({
    ttl:900000000
  })],
  providers: [CacheService]
})
export class CacheModule {
  static register(arg0: { ttl: number; }): import("@nestjs/common").Type<any> | import("@nestjs/common").DynamicModule | Promise<import("@nestjs/common").DynamicModule> | import("@nestjs/common").ForwardReference<any> {
    throw new Error('Method not implemented.');
  }
}
