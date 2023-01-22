import { db } from "../src/utils/db.server";



type Todo = {
    title: string;
    desc: string;
    status: string;
}

async function seed() {
    await Promise.all(
        getTodos().map((todo) => {
            return db.todo.create({
                data: {
                    title: todo.title,
                    desc: todo.desc,
                    status: todo.status
                }
            })
        })
    )
}

seed();

function getTodos(): Array<Todo> {
    return [
        {
            title: "takeout the trash",
            desc: "getting out the trash",
            status: "pending"
        },
        {
            title: "buy milk",
            desc: "he need some milk",
            status: "pending"
        },
        {
            title: "goto sleep",
            desc: "i need sleep",
            status: "pending"
        }
    ]
}




