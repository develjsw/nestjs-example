import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './service/user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('observer-pattern-example2/users')
export class ObserverPatternExample2Controller {
    constructor(private readonly userService: UserService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserDto: CreateUserDto) {
        const { userId } = createUserDto;
        return this.userService.createUser(userId);
    }
}
