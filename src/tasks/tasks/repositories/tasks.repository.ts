import { TaskDto } from './../../models/dto/task.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class TasksRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getTasks(): Promise<TaskDto[]> {
    return this.prisma.task.findMany();
  }

  async getTask(id: number): Promise<TaskDto> {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async createTask(taskDto: TaskDto): Promise<TaskDto> {
    return this.prisma.task.create({ data: taskDto });
  }

  async updateTask(id: number, task: TaskDto): Promise<TaskDto> {
    return this.prisma.task.update({ where: { id }, data: task });
  }

  async deleteTask(id: number): Promise<TaskDto> {
    return this.prisma.task.delete({ where: { id } });
  }
}
