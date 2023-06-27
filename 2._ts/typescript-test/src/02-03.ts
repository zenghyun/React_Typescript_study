type PersonType = {
    name: string;
    mobile: string;
    birthYear? : number;
}

type PersonListType = {
    pageNo: number;
    pageSize: number;
    persons: PersonType[];
}

const personList : PersonListType = {
    pageNo: 2,
    pageSize: 4,
    persons : [
        { name:"정연", mobile:"010-1111-1111"},
        { name:"지연", mobile:"010-1111-2222", birthYear: 1994},
        { name:"지수", mobile:"010-1111-3332", birthYear: 1995},
    ]
}

type PersonType1 = { no: number; name:string; email:string};
type PersonType2 = { no: number; name:string; tel:string};
type PersonTypeUnion = PersonType1 | PersonType2; 

// email 또는 tell 속성 중 하나를 반드시 포함해야 함 
let p1 : PersonTypeUnion = { no: 1, name:"정현", email:"pipo36@naver.com"};
let p2 : PersonTypeUnion = { no: 2, name:"성현", tel:"010-1232-3522"};

// email 또는 tel 속성을 포함하지 않으므로 에러 발생
// let p3 : PersonTypeUnion = { no: 3, name:"재오"}; 