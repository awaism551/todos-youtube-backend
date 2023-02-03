import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Todo } from "./todo.entity";
import { TodosService } from "./todos.service";
@ApiTags('todos')
@Controller()
export class TodosController {
    constructor(
        private todosService: TodosService
    ) {
    }
    @Get('all')
    @ApiOperation({
        summary: 'Get all todos',
        description: 'Get all todos',
        operationId: 'getAllTodos'
    })
    @ApiOkResponse({ description: 'Todos found', type: Todo, isArray: true })
    @ApiNotFoundResponse({ description: 'No todos found' })
    async findAll(): Promise<Todo[]> {
        return await this.todosService.findAll();
    }

    @Get(':id')
    @ApiOperation({
        summary: 'Get todo by id',
        description: 'Get todo by id',
        operationId: 'getTodoById'
    })
    @ApiOkResponse({ description: 'Todo found', type: Todo })
    @ApiNotFoundResponse({ description: 'Todo not found' })
    async findById(@Param('id') id: number): Promise<Todo> {
        return await this.todosService.findById(id);
    }

    @Post('creteOrUpdate')
    @ApiOperation({
        summary: 'Create or update todo',
        description: 'Create or update todo',
        operationId: 'creteOrUpdate'
    })
    @ApiOkResponse({ description: 'Todo created', type: Todo })
    async creteOrUpdate(@Body() todo: Todo) {
        console.log("🚀 ~ file: todos.controller.ts:44 ~ TodosController ~ create ~ title", todo)        
        return await this.todosService.createOrUpdate(todo);
    }

    @Delete(':id')
    @ApiOperation({
        summary: 'Delete todo by id',
        description: 'Delete todo by id',
        operationId: 'deleteTodoById'
    })
    @ApiOkResponse({ description: 'Todo deleted' })
    @ApiNotFoundResponse({ description: 'Todo not found' })
    async delete(@Param('id') id: number) {
        return await this.todosService.delete(id);
    }   
}