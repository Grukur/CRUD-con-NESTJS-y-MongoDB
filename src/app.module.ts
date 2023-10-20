import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MongooseModule.forRoot(
    'mongodb+srv://grukur:grukur@cluster0.4u4ewdk.mongodb.net/grukur01?retryWrites=true&w=majority'
    ), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
