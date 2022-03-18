import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentSchema } from 'src/schemas/students.schema';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService],
  imports: [
    MongooseModule.forFeature([{ name: 'student', schema: StudentSchema }]),
  ],
})
export class StudentsModule {}
