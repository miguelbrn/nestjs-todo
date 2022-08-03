import { Body, Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { TaskDto } from 'src/tasks/models/dto/task.dto';
import { TasksRepository } from './../repositories/tasks.repository';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksRepository: TasksRepository) {}

  @Post()
  createTask(@Body() task: TaskDto) {
    return this.tasksRepository.createTask(task);
  }

  @Get()
  getTasks() {
    return this.tasksRepository.getTasks();
  }

  @Get('/:id')
  getTask(id: number) {
    return this.tasksRepository.getTask(id);
  }

  @Put('/:id')
  updateTask(id: number, task: TaskDto) {
    return this.tasksRepository.updateTask(id, task);
  }

  @Delete('/:id')
  deleteTask(id: number) {
    return this.tasksRepository.deleteTask(id);
  }
}
