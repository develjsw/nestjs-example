import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetterSetterService } from './getter-setter.service';
import { UserDto } from './dto/user-dto';

@Controller('getter-setter-example')
export class GetterSetterController {
    constructor(private readonly getterSetterService: GetterSetterService) {}

    @Post('dto')
    async setUserDto(@Body() userDto: UserDto) {
        this.getterSetterService.userDtoProperty = userDto;
    }

    @Get('dto')
    async getUserDto() {
        return this.getterSetterService.userDtoProperty;
    }

    @Get('userName')
    async getUserName() {
        return this.getterSetterService.userNameProperty;
    }

    @Get('instance')
    async getInstance() {
        return this.getterSetterService.getterSetterServiceInstance;
    }
}
