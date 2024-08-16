// import React, { useState } from 'react';
// import './UserDashboard.css';

// const UserDashboard = () => {
//     const [users, setUsers] = useState([
//         { id: 1, email: 'user1@example.com', password: 'password1', username: 'User One' },
//         { id: 2, email: 'user2@example.com', password: 'password2', username: 'User Two' },
//     ]);

//     const handleAddUser = () => {
//         const newUser = { id: users.length + 1, email: '', password: '', username: '' };
//         setUsers([...users, newUser]);
//     };

//     const handleDeleteUser = (id) => {
//         setUsers(users.filter(user => user.id !== id));
//     };

//     const handleEditUser = (id, field, value) => {
//         setUsers(users.map(user => 
//             user.id === id ? { ...user, [field]: value } : user
//         ));
//     };

//     return (
//         <div className="dashboard-container">
//             <h2>User Dashboard</h2>
//             <table className="user-table">
//                 <thead>
//                     <tr>
//                         <th>User ID</th>
//                         <th>Email</th>
//                         <th>Password</th>
//                         <th>Username</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(user => (
//                         <tr key={user.id}>
//                             <td>{user.id}</td>
//                             <td>{user.email}</td>
//                             <td>{user.password}</td>
//                             <td>{user.username}</td>
//                             <td>
//                                 <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <button className="add-user-btn" onClick={handleAddUser}>Add User</button>
//         </div>
//     );
// };

// export default UserDashboard;


import React, { useState, useEffect } from 'react';
import './UserDashboard.css';
import AdminNavbar from '../Admin/AdminNavbar';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const UserDashboard = () => {
    const [users, setUsers] = useState([]);

    // Fetch users from the backend
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/users');
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data);
                } else {
                    console.error('Failed to fetch users');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchUsers();
    }, []);

    // Add a new user
    const handleAddUser = async () => {
        const newUser = { email: '', password: '', userName: '' };
        try {
            const response = await fetch('http://localhost:8080/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                const data = await response.json();
                setUsers([...users, data]);
            } else {
                console.error('Failed to add user');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Delete a user
    const handleDeleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/users/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setUsers(users.filter(user => user.id !== id));
            } else {
                console.error('Failed to delete user');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Edit a user
    const handleEditUser = async (id, field, value) => {
        const userToUpdate = users.find(user => user.id === id);
        const updatedUser = { ...userToUpdate, [field]: value };

        try {
            const response = await fetch(`http://localhost:8080/api/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });

            if (response.ok) {
                const data = await response.json();
                setUsers(users.map(user => (user.id === id ? data : user)));
            } else {
                console.error('Failed to update user');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <AdminNavbar/>
            <AdminSidebar/>
        <div className="dashboard-container">
            <h2>User Dashboard</h2>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>
                                <input 
                                    type="text" 
                                    value={user.email} 
                                    onChange={(e) => handleEditUser(user.id, 'email', e.target.value)} 
                                />
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    value={user.password} 
                                    onChange={(e) => handleEditUser(user.id, 'password', e.target.value)} 
                                />
                            </td>
                            <td>
                                <input 
                                    type="text" 
                                    value={user.userName} 
                                    onChange={(e) => handleEditUser(user.id, 'userName', e.target.value)} 
                                />
                            </td>
                            <td>
                                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button className="add-user-btn" onClick={handleAddUser}>Add User</button>
        </div>
        </div>
    );
};

export default UserDashboard;

