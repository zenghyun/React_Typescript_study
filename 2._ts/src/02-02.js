// 제일 좋은 방법 
function addContact1 ({name, phone, email="이메일 없음", age=0}) {
    console.log(name, phone, email, age);
}

addContact1({name: '이정현', phone: '010-1234-1234'});

// 속성이 전달되지 않았을 때를 고려해 9,10 행처럼 기본값을 부여해야 한다. 
function addContact2(contact) {
    if(!contact.email) contact.email = '이메일 없음';
    if(!contact.age) contact.age = 0; 
    let {name, phone, email, age} = contact; 
    console.log(name, phone, email, age); 
}

addContact2({name: '이정현', phone: '010-1234-1234'});


// 코드가 간단할 때는 괜찮지만 현실의 복잡한 코드에서는 직관성이 굉장히 떨어지는 방식이다. 
function addContact3(name, phone, email="이메일 없음", age= 0) {
    console.log(name, phone, email, age);
}

addContact3('이정현', '010-1234-1234');