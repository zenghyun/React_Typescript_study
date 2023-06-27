"use strict";

// 제일 좋은 방법 
function addContact1(_ref) {
  var name = _ref.name,
    phone = _ref.phone,
    _ref$email = _ref.email,
    email = _ref$email === void 0 ? "이메일 없음" : _ref$email,
    _ref$age = _ref.age,
    age = _ref$age === void 0 ? 0 : _ref$age;
  console.log(name, phone, email, age);
}
addContact1({
  name: '이정현',
  phone: '010-1234-1234'
});

// 속성이 전달되지 않았을 때를 고려해 9,10 행처럼 기본값을 부여해야 한다. 
function addContact2(contact) {
  if (!contact.email) contact.email = '이메일 없음';
  if (!contact.age) contact.age = 0;
  var name = contact.name,
    phone = contact.phone,
    email = contact.email,
    age = contact.age;
  console.log(name, phone, email, age);
}
addContact2({
  name: '이정현',
  phone: '010-1234-1234'
});

// 코드가 간단할 때는 괜찮지만 현실의 복잡한 코드에서는 직관성이 굉장히 떨어지는 방식이다. 
function addContact3(name, phone) {
  var email = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "이메일 없음";
  var age = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  console.log(name, phone, email, age);
}
addContact3('이정현', '010-1234-1234');