import { Controller } from '@nestjs/common';

// order 접근시에만 사용 - 파사드와는 관련없음
@Controller('facade-pattern/orders')
export class OrderController {
    constructor() {}
}
