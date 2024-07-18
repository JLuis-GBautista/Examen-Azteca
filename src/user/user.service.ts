import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll() {
    return await this.userModel.find();
  }

  async findOne(id: string) {
    return await this.userModel.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    if (updateUserDto.email)
      throw new HttpException(
        'No puedes actualizar el Email',
        HttpStatus.CONFLICT,
      );
    await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
    return { message: 'El usuario se actualizo correctamente.' };
  }

  async remove(id: string) {
    await this.userModel.findByIdAndDelete(id);
    return { message: 'El usuario se elimino correctamente' };
  }
}
