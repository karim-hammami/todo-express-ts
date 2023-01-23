import express from "express"
import type {Request, Response} from "express"
import {body, validationResult} from "express-validator"

import * as TodoService from "./todo.service"

export const todoRouter = express.Router()

todoRouter.get("/", async (request: Request, response: Response) => {
    try {
        const todos = await TodoService.ListTodos()
        return response.status(200).json(todos)
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

todoRouter.get("/:id", async (request: Request, response: Response) => {
    const id: number = parseInt(request.params.id, 10)
    try {
        const todo = await TodoService.getTodo(id)
        if (todo) {
            return response.status(200).json(todo)
        }
        return response.status(404).json("todo could not be found!")
    } catch (error: any) {
        return response.status(500).json(error.message)
    }
})

todoRouter.post(
    "/",
    body("title").isString(),
    body("desc").isString(),
    async (request: Request, response: Response) => {
        const errors = validationResult(request)
        if (!errors.isEmpty()) {
            return response.status(400).json({errors: errors.array()})
        }
        try {
            const todo = request.body
            const newTodo = await TodoService.createTodo(todo)
            return response.status(201).json(newTodo)
        } catch (error: any) {
            return response.status(500).json(error.message)
        }
    }
)


todoRouter.put(
    "/:id",
    body("title").isString(),
    body("desc").isString(),
    body("status").isString(),
    async (request: Request, response: Response) => {
       const errors = validationResult(request)
        if (!errors.isEmpty()) {
            return response.status(400).json({errors: errors.array()})
        }
        const id: number = parseInt(request.params.id, 10)
        try {
            const todo = request.body
            const updatedTodo = await TodoService.updateTodo(todo, id)
            return response.status(200).json(updatedTodo)
        } catch (error: any) {
            return response.status(500).json(error.message)
        }
    }
)

todoRouter.delete(
    "/:id",
    async (request: Request, response: Response) => {
        const id: number = parseInt(request.params.id, 10)
        try {
            await TodoService.deleteTodo(id)
            return response.status(204).json("this todo is deleted")
        } catch (error: any) {
            return response.status(500).json(error.message)
        }
    }
)
