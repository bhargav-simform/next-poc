import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MCPClient } from './Client';

@Module({
  imports: [ConfigModule],
  providers: [MCPClient],
  exports: [MCPClient],
})
export class MCPModule {}
