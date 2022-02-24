import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { todo } from '../Home/Home'

type Props = {
    todo: todo
    handleDelete: (id: number) => void
    completed: (id: number) => void
}

export default function Cards({ todo, handleDelete, completed }: Props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>
                        {todo.description}
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Button variant={`${todo.completed ? "secondary" : "primary"} `} size='sm' onClick={() => completed(todo.id)}>Completed</Button>
                        <Button variant="danger" size='sm' onClick={() => handleDelete(todo.id)}>Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}