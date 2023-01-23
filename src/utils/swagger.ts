export const doc = {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0", 
    "title": "TodoList REST API",
    "description": "a TodoList REST API build with Typescript, Express and Prisma",
    "license": {
      "name": "MIT",
      "url": "https://github.com/karim-hammami/todo-express-ts"
    }
  },
  "host": "localhost:8000",
  "basePath": "/",
  "schemes": ["http"],
  "consumes": ["application/json"],
  "produces": ["application/json"],
  "paths": {
      "/api/todos": {
          "post": {
              "tags": [
                  "Todos"
              ],
              "summary": "create a todo item",
              "description": "create a todo item",
              "parameters": [
            {
              "name": "todo",
              "in": "body",
              "description": "Todo that we want to create",
              "schema": {
                "$ref": "#/definitions/Todos"
              }
            }
          ],
          "produces": [
            "application/json"
          ],
          "responses": {
              "200": {
                  "description": "new todo is created",
                  "schema": {
                "$ref": "#/definitions/Todos"
              }
              }
          }
          },
          "get": {
              "tags": [
                  "Todos"
              ],
              "summary": "list all todo items",
              "responses": {
                  "200": {
                      "description": "OK",
                      "schema": {
                  "$ref": "#/definitions/Todos"
                }
                  }
              }
          },
                },
      "/api/todos/{id}": {
          "get": {
              "tags": [
                  "Todos"
              ],
              "description": "list a single todo item based on id",
              "summary": "get a single todo by id",
"responses": {
                  "200": {
                      "description": "OK",
                      "schema": {
                  "$ref": "#/definitions/Todos"
                }
                  }
              }

          },
          "put": {
              "tags": [
                  "Todos"
              ],
              "description": "modify a single todo item based on id"
          },
          "delete": {
              "tags": [
                  "Todos"
              ],
              "description": "delete a single todo item based on id"
          }
      }
  },
  "definitions": {
      "Todos": {
          "required": [
              "id",
              "title",
              "desc",
              "status",
          ],
          "properties": {
              "id": {
                  "type": "integer",
                  "uniqueItems": true,
              },
              "title": {
                  "type": "string"
              },
              "desc": {
                  "type": "string"
              },
              "status": {
                  "type": "string"
              }
          }
      }
  }
} 
