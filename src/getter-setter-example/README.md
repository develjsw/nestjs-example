### Getter와 Setter

#### 정의
- getter : 
   - 클래스 내부의 특정 속성 값을 반환하는 메서드
   - 객체의 속성에 접근할 때 호출됨
- setter : 
   - 클래스 내부의 특정 속성 값을 설정하는 메서드
   - 객체의 속성 값을 할당할 때 호출됨

#### 특징
- getter : 
  - 접근자 메서드 : 객체의 속성 값을 반환하는 메서드로, `get` 키워드를 사용하여 정의함
  - 반환 타입 : 반환 타입을 지정할 수 있으며, `반드시 값을 반환해야 함`
  - 읽기 전용 속성 : 속성을 읽기 전용으로 만들 수 있음
  - 호출 방식 : `object.property` 형태로 호출되며, 함수 호출처럼 보이지 않음
    - ex) this.service.getter함수 (O)
    - ex) this.service.getter함수() (X)
- setter :
  - 설정자 메서드 : 객체의 속성 값을 설정하는 메서드로, `set` 키워드를 사용하여 정의함
  - 반환 타입 : 값을 반환하지 않으며, `반환 타입을 지정할 수 없음`
  - 쓰기 전용 속성 : 속성을 쓰기 전용으로 만들 수 있음
  - 유효성 검사 : 값을 설정할 때 유효성 검사를 수행할 수 있음
  - 호출 방식 : `object.property = value` 형태로 호출되며, 함수 호출처럼 보이지 않음
    - ex) this.service.setter함수 = 값 (O)
    - ex) this.service.setter함수(값) (X)
- 공통 :
  - getter와 setter는 객체의 속성 값을 안전하게 접근하고 수정할 수 있도록 도와줌
  - getter와 setter는 객체의 속성을 캡슐화하고, 유효성 검사를 포함할 수 있어, 클래스의 상태를 보다 안전하게 관리할 수 있음