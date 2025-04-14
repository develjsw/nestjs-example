/* 방법 1 */
// import {
//     IsNotEmpty,
//     IsString,
//     Validate,
//     ValidationArguments,
//     ValidatorConstraint,
//     ValidatorConstraintInterface
// } from 'class-validator';
//
// @ValidatorConstraint()
// class NickNameValidator implements ValidatorConstraintInterface {
//     validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> | boolean {
//         return /^[가-힣]{4}\d{2}$/.test(value);
//     }
//
//     defaultMessage(validationArguments?: ValidationArguments): string {
//         return '닉네임은 한글 4글자 + 숫자 2개의 조합만 가능합니다. 입력한 닉네임 : ($value)';
//     }
// }
//
// export class CreateMemberDto {
//     @IsNotEmpty()
//     @IsString()
//     memberName: string;
//
//     @IsNotEmpty()
//     @Validate(NickNameValidator)
//     nickName: string;
// }

/* 방법 2 */
import {
    IsNotEmpty,
    IsString,
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface
} from 'class-validator';

@ValidatorConstraint()
class NickNameValidator implements ValidatorConstraintInterface {
    validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> | boolean {
        return /^[가-힣]{4}\d{2}$/.test(value);
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return '닉네임은 한글 4글자 + 숫자 2개의 조합만 가능합니다. 입력한 닉네임 : ($value)';
    }
}

function IsNickNameValid(validationOptions?: ValidationOptions) {
    return function (object: NonNullable<unknown>, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: NickNameValidator
        });
    };
}

export class CreateMemberDto {
    @IsNotEmpty()
    @IsString()
    memberName: string;

    @IsNotEmpty()
    @IsNickNameValid()
    nickName: string;
}
