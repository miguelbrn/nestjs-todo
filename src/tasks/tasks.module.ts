import { TasksRepository } from './tasks/repositories/tasks.repository';
import { PrismaModule } from './../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { TasksController } from './tasks/controllers/tasks.controller';

@Module({
  controllers: [TasksController],
  providers: [TasksRepository],
  imports: [PrismaModule],
})
export class TasksModule {}
