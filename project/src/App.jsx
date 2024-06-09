import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState([
        { id: 101, name: "Davit", salary: 200000 },
        { id: 102, name: "Armen", salary: 180000 },
        { id: 103, name: "Gevorg", salary: 250000 },
        { id: 104, name: "Anahit", salary: 430000 },
    ])

    const salaryUp = (id) => {
        setUsers(
            users.map((elm) =>
                elm.id === id ? { ...elm, salary: elm.salary + 50000 } : elm
            )
        )
    }

    const salaryDown = (id) => {
        setUsers(
            users.map((elm) => {
                if (elm.id === id) {
                    const newSalary = elm.salary - 50000
                    return { ...elm, salary: newSalary < 50000 ? 50000 : newSalary }
                }
                return elm;
            })
        )
    }

    const remove = (id) => {
        setUsers(users.filter(elm => elm.id !== id))
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>salary</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((elm) => (
                        <tr key={elm.id}>
                            <td>{elm.id}</td>
                            <td>{elm.name}</td>
                            <td>{elm.salary} AMD</td>
                            <td>
                                <button onClick={() => salaryUp(elm.id)}>Up salary</button>
                                <button onClick={() => salaryDown(elm.id)}>Down salary</button>
                                <button onClick={() => remove(elm.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default App
