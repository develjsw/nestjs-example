### Prisma
1. 패키지 설치 : $ npm install prisma
2. Prisma 초기화 : npx prisma init
3. 다중 DB 사용 방법 :
    - [project]/prisma/[DB폴더명]/schema.prisma 생성
    - 기존에 데이터가 없는 경우: $ npx prisma migrate dev --schema=prisma/[DB폴더명]/schema.prisma
    - 기존에 데이터가 있는 경우: $ npx prisma db pull --schema=prisma/[DB폴더명]/schema.prisma
    - $ npx prisma generate --schema=prisma/[DB폴더명]/schema.prisma
      ~~~
      ex)
      [project]/prisma/[DB폴더명]/schema.prisma 생성
      
      npx prisma migrate dev --schema=prisma/first/schema.prisma
      npx prisma generate --schema=prisma/first/schema.prisma

      npx prisma migrate dev --schema=prisma/second/schema.prisma
      npx prisma generate --schema=prisma/second/schema.prisma
      ~~~