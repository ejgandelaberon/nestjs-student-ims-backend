import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(@InjectModel('student') private model: Model<Student>) {}

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    return await new this.model({
      ...createStudentDto,
      createdAt: new Date(),
    }).save();
  }

  async findAll(): Promise<Student[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Student> {
    return await this.model.findById(id).exec();
  }

  async update(
    id: string,
    updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    return await this.model.findByIdAndUpdate(id, updateStudentDto).exec();
  }

  async delete(id: string): Promise<Student> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
