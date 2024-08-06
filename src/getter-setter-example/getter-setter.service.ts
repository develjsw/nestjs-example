import { Injectable, Scope } from '@nestjs/common';
import { UserDto } from './dto/user-dto';

/*
    - getter는 동일한 scope내에 인스턴스가 싱글톤으로 동작하는 동안, 즉 애플리케이션이 실행되는 동안 값이 유지된다.
    - scope를 설정하지 않았다면 전역에서 해당 인스턴스의 속성 값을 사용할 수 있으며 애플리케이션이 종료되면 초기화 된다.
*/
//@Injectable({ scope: Scope.REQUEST })
@Injectable()
export class GetterSetterService {
    private userDto: UserDto;

    /*
        - setter는 반환 타입을 적을 수 없음
        - setter, getter 이름은 같아도 됨
    */
    set userDtoProperty(userDto: UserDto) {
        this.userDto = userDto;
    }

    get userNameProperty(): string {
        return this.userDto?.userName;
    }

    /*
        - 속성명과 함수명이 같아서는 안됨
        - private userDto: UserDto;와 get userDto() 부분에서 이름이 같기 때문에 에러가 발생함
        - 발생 원인은 this.함수명과 this.속성명이 같으면 무한루프가 발생하기 때문에 typescript에서 에러를 발생시킴
    */
    /*get userDto(): UserDto {
        return this.userDto;
    }*/

    get userDtoProperty(): UserDto {
        return this.userDto;
    }

    get getterSetterServiceInstance(): this {
        return this;
    }
}
