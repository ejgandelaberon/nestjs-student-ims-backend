import { BaseStudentDto } from './base-student.dto';
// import { PartialType } from '@nestjs/mapped-types';
// import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto extends BaseStudentDto {
  modifiedAt: Date;
}
