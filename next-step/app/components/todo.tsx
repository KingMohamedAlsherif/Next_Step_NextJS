"use client";

import { useEffect, useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState<any>({});

    useEffect(() => {
        const fetchTodo = async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            const result = await response.json();
            setTodo(result);
        };

        fetchTodo();
    }, []);

    return (
        <div>
            {todo.title}
        </div>
    );
}