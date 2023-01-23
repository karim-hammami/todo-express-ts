import { db } from "../utils/db.server";


type Todo = {
    id: number;
    title: string;
    desc: string;
    status: string;
}


export const ListTodos = async (): Promise<Todo[]> => {
   return db.todo.findMany({
       select: {
           id: true,
           title: true,
           desc: true,
           status: true,
       }
   }) 
}

export const getTodo = async (id: number): Promise<Todo | null> => {
    return db.todo.findUnique({
        where: {
            id,
        }
    })
}

export const createTodo = async (todo: Omit<Todo, "id"> ): Promise<Todo> => {
    const {title, desc} = todo
    return db.todo.create({
        data: {
            title,
            desc,
        },
        select: {
            id: true,
            title: true,
            desc: true,
            status: true,
        }
    })
}

export const updateTodo = async (todo: Omit<Todo, "id">, id: number): Promise<Todo> => {
    const {title, desc, status} = todo
    return db.todo.update({
        where: {
            id,
        },
        data: {
            title,
            desc,
            status,
        },
        select: {
            id: true,
            title: true,
            desc: true,
            status: true,
        }
    })
}

export const deleteTodo = async (id: number): Promise<void> => {
    await db.todo.delete({
        where: {
            id,
        }
    })
    
}



