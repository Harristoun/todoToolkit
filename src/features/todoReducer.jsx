import { createAction, createReducer } from "@reduxjs/toolkit"





export const add = createAction('ADD_TODO')
export const remove = createAction('REMOVE_TODO')

const initialState = {
todos: []
}

const todoReducer = createReducer(initialState, (builder) => {
builder
.addCase(add, (state, action) => {
state.todos.push(action.payload)
})
.addCase(remove, (state, action)=> {
state.todos = state.todos.filter((item, index) => index !== action.payload)
})
})

export default todoReducer




