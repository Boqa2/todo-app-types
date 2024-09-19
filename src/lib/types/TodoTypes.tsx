import { ChangeEvent } from "react"

export type TodoItem = {
    id: string,
    title: string,
    complited: boolean,
    date: string,
    time: string
}
export type TodoResponse = TodoItem[]

export type Props ={
    value: string,
    onChange: (e: ChangeEvent <HTMLInputElement>)
}