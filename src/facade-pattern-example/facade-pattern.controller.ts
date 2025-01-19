import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { UserManageFacadeService } from './facade/user-manage-facade.service';

@Controller('facade-pattern')
export class FacadePatternController {
    constructor(private readonly userManageFacadeService: UserManageFacadeService) {}

    @Post('users')
    async registerUser(@Body(new ValidationPipe()) registerUserDto: RegisterUserDto) {
        return await this.userManageFacadeService.registerUser(registerUserDto);
    }
}
