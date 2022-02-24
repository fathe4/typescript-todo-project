import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form } from 'react-bootstrap';
import Cards from '../Cards/Cards';


export type todo = {
    id: number
    title: string,
    description: string
    completed: boolean
}

const Home: React.FunctionComponent = () => {
    const [title, setTitle] = React.useState<string>('')
    const [description, setDescription] = React.useState<string>('')
    const [todos, setTodos] = React.useState<todo[]>([])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const id = Math.random() * 10000
        const newValue: { id: number, title: string, description: string, completed: boolean } = { id: Math.round(id), title: title, description: description, completed: false }
        setTodos((prev: todo[]) => [...prev, newValue])

        localStorage.setItem("todos", JSON.stringify(todos));
    }
    const handleDelete = (id: number) => {
        const filter = todos.filter(todo => todo.id !== id)
        setTodos(filter)
    }
    const completed = (id: number) => {
        const find = todos.find(todo => {
            if (todo.id === id) {
                return todo.completed = true
            }
        })
    }


    console.log(todos);




    return <Container>
        <div className='w-50 mx-auto my-5 shadow p-3'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onBlur={(e) => setTitle(e.target.value)} type="title" name='title' placeholder="Title" />
                </Form.Group>
                <Form.Control
                    as="textarea"
                    name="description"
                    placeholder="your description"
                    style={{ height: '100px' }}
                    onBlur={(e) => setDescription(e.target.value)}
                />
                <br />
                <Button type='submit' variant="primary">Submit</Button>
            </Form>
        </div>

        {todos.length > 0 ? todos.map((todo, idx) => <Cards key={idx + 1} todo={todo} handleDelete={handleDelete} completed={completed} />) : ''}

    </Container>
};

export default Home;
