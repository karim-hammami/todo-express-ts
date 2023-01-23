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





