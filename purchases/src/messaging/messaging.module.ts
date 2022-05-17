import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KafkaService } from './kafka.service';

@Module({
  imports: [ConfigModule.forRoot()], //read .env file
  providers: [KafkaService],
  exports: [KafkaService],
})
export class MessagingModule {}
