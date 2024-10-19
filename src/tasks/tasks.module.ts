import { Module } from '@nestjs/common'
import { TaskController } from './tasks.controller';
import { TasksServices } from './tasks.service';

@Module({
    controllers: [TaskController],
    providers: [TasksServices]
})
export class TasksModule {}