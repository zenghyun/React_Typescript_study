import React from 'react';
import { TodoListItemType } from './App';

type Props = {
    todoListItem: TodoListItemType;
};

// eslint-disable-next-line react-refresh/only-export-components
const TodoListsItemBody = (props:Props) => {
    console.log("## TodoListsItemBody");
    return <span>{props.todoListItem.todo}</span>;
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(TodoListsItemBody);