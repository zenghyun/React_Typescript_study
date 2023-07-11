import { useState, useEffect } from "react";
import App from './App';
import { produce } from 'immer';
import axios from "axios";

export type TodoItemType = { id: number; todo:string; desc: string; done: boolean; };
export type StatesType = { todoList: Array<TodoItemType>, isLoading: boolean};
export type CallbacksType = {
    fetchTodoList: () => void;
    addTodo: (todo: string, desc: string, callback: () => void) => void;
    deleteTodo: (id:number) => void;
    toggleDone: (id:number) => void;
    updateTodo: (id:number, todo: string, desc: string, done: boolean, callback: () => void) => void;
};

const USER = "gdhong";
const BASEURI = "/api/todolist_long/" + USER;

 const AppContainer = () => {
   const [todoList, setTodoList] = useState<Array<TodoItemType>>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchTodoList();
   }, []);

   // 할 일 목록 조회 기능을 제공하는 함수
   const fetchTodoList = async () => {
    setTodoList([]);
    setIsLoading(true);
    try {
        const response = await axios.get(BASEURI);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setTodoList(response.data);
    } catch (e) {
        if( e instanceof Error) alert("조회 실패 :" + e.message);
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        else alert("조회 실패 :" + e);
    }
    setIsLoading(false);
   };

   // 할 일 추가 기능을 제공하는 함수
   // 할 일 추가가 성공하면 마지막 인자로 전달된 callback 호출
    const addTodo = async (todo:string, desc:string, callback: () => void) => {
        setIsLoading(true);
        try {
            const response = await axios.post(BASEURI, { todo, desc });
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if(response.data.status === "success") {
                // 한 건의 할 일 추가가 성공이라면 전체 할 일 목록을 다시 조회하는 것이 아니라 추가된 한 건의 정보만 state에 추가
                const newTodoList = produce(todoList, (draft) => {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
                    draft.push({...response.data.item, done:false});
                });
                setTodoList(newTodoList);
                callback();
            } else {
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/no-unsafe-member-access
                alert("할 일 추가 실패 :" + response.data.message);
            }
        } catch (e) {
            if( e instanceof Error) alert("할 일 추가 실패 :" + e.message);
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            else alert("할 일 추가 실패 :" + e);
        }
        setIsLoading(false);
    };

    // 할 일 한 건을 삭제하는 기능을 제공하는 함수 
    const deleteTodo = async (id: number) => {
        setIsLoading(true);
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const response = await axios.delete(`${BASEURI}/${id}`);
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if(response.data.status === "success") {
                const index = todoList.findIndex(todo => todo.id === id);
                const newTodoList = produce(todoList, (draft) => {
                    draft.splice(index, 1);
                });
                setTodoList(newTodoList);
            } else {
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/no-unsafe-member-access
                alert("할 일 삭체 실패: "  + response.data.message);
            }
        } catch (e) {
            if( e instanceof Error) alert("할 일 삭제 실패 :" + e.message);
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            else alert("할 일 삭제 실패 :" + e);
        }
        setIsLoading(false);
    };

    // 할 일의 완료 여부를 토글하는 기능을 제공하는 함수 
    const toggleDone = async (id:number) => { 
        setIsLoading(true);
        try {
            const todoItem = todoList.find(todo => todo.id === id);
            const response = await axios.put(`${BASEURI}/${id}`, { ...todoItem, done: !todoItem?.done});
            
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if(response.data.status === "success") {
                const index = todoList.findIndex(todo => todo.id === id);
                const newTodoList = produce(todoList, (draft) => {
                    draft[index].done = !draft[index].done;
                });
                setTodoList(newTodoList);
            } else {
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/no-unsafe-member-access
                alert("완료 토글 실패 : " + response.data.message)
            }
        } catch (e) {
            if( e instanceof Error) alert("완료 토글 실패 :" + e.message);
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            else alert("완료 토글 실패 :" + e);
        }
        setIsLoading(false);
    };

    // 할 일 수정 기능을 제공하는 함수
    // 할 일 수정이 성공하면 마지막 인자로 전달된 callback 
    const updateTodo = async (id:number, todo:string, desc:string, done:boolean, callback: () => void) => {
        setIsLoading(true);
        try {
            const response = await axios.put(`${BASEURI}/${id}`, {todo, desc, done});
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if(response.data.status === "success") {
                const index = todoList.findIndex(todo => todo.id === id);
                const newTodoList = produce(todoList, (draft) => {
                    draft[index] = {...draft[index], todo, desc, done};
                 }); 
                 setTodoList(newTodoList);
                 callback();
            } else {
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/no-unsafe-member-access
                alert("할 일 수정 실패 : " + response.data.message);
            }
        } catch (e) {
            if( e instanceof Error) alert("할 일 수정 실패 :" + e.message);
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            else alert("할 일 수정 실패 :" + e);
        }
        setIsLoading(false);
    };

    // 상태와 액션을 states, callbacks 객체로 묶어서 한꺼번에 속성을 전달합니다.
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const callbacks: CallbacksType = { fetchTodoList, addTodo, deleteTodo, toggleDone, updateTodo};
    const states: StatesType = {todoList, isLoading};

    return <App callbacks={callbacks} states={states} />;
};

export default AppContainer;

