import { Controller } from '@nestjs/common';

// payment 접근시에만 사용 - 파사드와는 관련없음
@Controller('facade-pattern/payments')
export class PaymentController {
    constructor() {}
}
