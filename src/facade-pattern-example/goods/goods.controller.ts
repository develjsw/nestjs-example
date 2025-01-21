import { Controller } from '@nestjs/common';

// goods 접근시에만 사용 - 파사드와는 관련없음
@Controller()
export class GoodsController {
    constructor() {}
}
