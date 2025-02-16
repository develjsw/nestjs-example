### NestJS @Injectable 데코레이터와 의존성 주입(DI)

- `@Injectable()` 데코레이터란?
  - `@Injectable()` 데코레이터는 NestJS의 DI(Dependency Injection) 시스템에서 클래스를 NestJS 컨테이너에서 관리할 수 있도록 마킹하는 역할을 함
  - `@Injectable()`을 사용하면 의존성 주입(DI) 대상이 됨과 동시에, 스코프(Scope) 설정이 가능함
  - `@Injectable()`을 사용하지 않아도 `providers`에 등록하면 NestJS에서 관리되며 싱글톤으로 동작함

---

- `@Injectable()`을 사용할 때와 사용하지 않을 때 차이점

  | 구분 | `@Injectable()` 사용 ✅ | `@Injectable()` 미사용 ❌ |
  |------|-----------------|-----------------|
  | **NestJS가 관리하는가?** | ✅ NestJS DI 컨테이너에서 관리됨 | ✅ `providers`에 등록하면 관리됨 |
  | **싱글톤 보장 여부** | ✅ 기본적으로 싱글톤 (스코프 변경 가능) | ✅ 기본적으로 싱글톤 |
  | **스코프 설정 가능 여부** | ✅ `Scope.REQUEST`, `Scope.TRANSIENT` 가능 | ❌ 설정 불가능 (항상 싱글톤) |
  | **생성자 매개변수 처리** | ✅ 생성자에 매개변수가 있으면 `providers`에서 초기값을 설정해야 함 | ❌ 생성자 매개변수가 있어도 `providers`에서 설정하지 않으면 `undefined`로 전달됨 |
  | **주로 사용되는 경우** | 일반적인 서비스 (`Service`), `Injectable`을 통한 의존성 관리가 필요한 경우 | `extends`를 통한 상속 구조에서 부모 클래스로 사용될 경우 |
  | **NestJS에서 자동 감지** | ✅ 자동 감지됨 | ❌ `providers`에 직접 등록해야 함 |

---