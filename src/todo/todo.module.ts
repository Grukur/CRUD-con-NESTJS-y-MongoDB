import { Module } from '@nestjs/common';
import { MongooseModule  } from '@nestjs/mongoose';
import { Todo, TodosSchema } from './schemas/todo.schemas';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Todo.name,
            schema: TodosSchema,
        }])
    ],
    providers: [TodoService],
    controllers: [TodoController]
})
export class TodoModule {}
