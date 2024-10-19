import { Controller, Get } from "@nestjs/common";
import { TasksServices } from "./tasks.service";

@Controller({})
export class TaskController {

    constructor(private tasksService: TasksServices) {
        
    }

    @Get('/tasks')
    getAllTasks() {
        return this.tasksService.getTasks()
    }


}