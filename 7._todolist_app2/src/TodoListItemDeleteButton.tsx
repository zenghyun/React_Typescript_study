import React from 'react';

type Props = {
    id: number;
    deleteTodo: (id: number) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
const TodoListItemDeleteButton = (props:Props) => {
    console.log("## TodoListItemDeleteButton"); 
    return (
        <span style={{ cursor: "pointer", color: "blue"}}
            onClick={() => props.deleteTodo(props.id)}
        >
            삭제
        </span>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(TodoListItemDeleteButton);