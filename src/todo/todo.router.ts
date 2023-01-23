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






