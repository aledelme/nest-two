import { Injectable } from "@nestjs/common";

@Injectable()
export class TasksServices {

    getTasks() {
        return ['Task 1', 'Task 2']
    }
}