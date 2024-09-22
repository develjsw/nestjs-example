### Prisma
1. 패키지 설치 : $ npm install prisma
2. Prisma 초기화 : npx prisma init
3. 다중 DB 사용 방법 :
    - [project]/prisma/[DB폴더명]/schema.prisma 생성
    - output 경로 추가
      ~~~
      ex)
      [project]/prisma/[DB폴더명]/schema.prisma 파일에 generator client output 경로 설정 추가
      
      generator client {
        provider = "prisma-client-js"
        output   = "../generated/first"
      }
      
      generator client {
        provider = "prisma-client-js"
        output   = "../generated/second"
      }   
      ~~~
    - 기존에 데이터가 없는 경우: $ npx prisma migrate dev --schema=prisma/[DB폴더명]/schema.prisma
    - 기존에 데이터가 있는 경우: $ npx prisma db pull --schema=prisma/[DB폴더명]/schema.prisma
    - $ npx prisma generate --schema=prisma/[DB폴더명]/schema.prisma
      ~~~
      ex)
      npx prisma migrate dev --schema=prisma/first/schema.prisma
      npx prisma generate --schema=prisma/first/schema.prisma

      npx prisma migrate dev --schema=prisma/second/schema.prisma
      npx prisma generate --schema=prisma/second/schema.prisma
      ~~~
4. 폴더 경로 변경 (@prisma/client → generated)
   - 단일 DB의 경우 : @prisma/client 사용
   - 다중 DB의 경우 : generated 사용
     ~~~
     ex) prisma.service 파일과 service 파일들에서 사용중이던 @prisma/client import 부분을 새로 생성한 generated 경로로 변경
   
     [ prisma1.service ]
     - AS-IS : import { PrismaClient } from '@prisma/client';
     - TO-BE : import { PrismaClient as PrismaClientFirst } from '../../prisma/generated/first';
   
     [ prisma2.service ]
     - AS-IS : import { PrismaClient } from '@prisma/client';
     - TO-BE : import { PrismaClient as PrismaClientSecond } from '../../prisma/generated/second';
   
     [ user.service ]
     - AS-IS : import { User, Prisma } from '@prisma/client';
     - TO-BE : import { User, Prisma } from '../../../../prisma/generated/first';
   
     [ products.service ]
     - AS-IS : import { Products, Prisma } from '@prisma/client';
     - TO-BE : import { Products, Prisma } from '../../../../prisma/generated/second';
     ~~~