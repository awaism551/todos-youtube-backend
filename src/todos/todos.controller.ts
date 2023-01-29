import { Controller, Get } from "@nestjs/common";
import { Todo } from "./todo.entity";
import { TodosService } from "./todos.service";

@Controller()
export class TodosController {
    constructor(
        private todosService: TodosService
    ) {
    }
    // http://localhost:3001/all
    @Get('all')
    async findAll(): Promise<Todo[]> {
        return await this.todosService.findAll();
    }
}