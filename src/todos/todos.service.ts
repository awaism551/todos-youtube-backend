import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Todo } from './todo.entity';

export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todosRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todosRepository.find();
  }

  findById(id: number): Promise<Todo> {
    return this.todosRepository.findOne({
      where: {
        id
      },
    });
  }

  createOrUpdate(todo: Todo): Promise<Todo> {
    console.log("🚀 ~ file: todos.service.ts:24 ~ TodosService ~ create ~ todo", todo)    
    return this.todosRepository.save(todo);
  }

  delete(id: number): Promise<DeleteResult> {
    return this.todosRepository.delete(id);
  }
}
