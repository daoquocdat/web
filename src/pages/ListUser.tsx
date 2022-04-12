
import { Fragment, useEffect, useState } from 'react'


const ListUser = () =>{
    const [users, setUsers] = useState<any>([]);
    const getUsers = async () => {
        try {
            const users = await fetch("http://localhost:4000/users");          
            const usersData =await users.json();    
            setUsers(usersData);
        } catch (err) {
            console.error(err);
        }
    }
    useEffect( ()=>{
        getUsers()
    }, []);
 
    return (<Fragment>
        {" "}
        <table className='table mt-5 text-center'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                 {(users || [])?.map((user) => (
                    <tr key={user?.id}>
                        <td>{user?.name}</td>
                        <td>{user?.username}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </Fragment>)
}

export default ListUser