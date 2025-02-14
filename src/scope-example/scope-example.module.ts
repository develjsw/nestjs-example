import { Module } from '@nestjs/common';
import { ScopeExampleController } from './scope-example.controller';
import { RequestScopeService } from './service/request-scope.service';
import { DefaultScopeService } from './service/default-scope.service';

@Module({
    imports: [],
    controllers: [ScopeExampleController],
    providers: [RequestScopeService, DefaultScopeService],
    exports: []
})
export class ScopeExampleModule {}
