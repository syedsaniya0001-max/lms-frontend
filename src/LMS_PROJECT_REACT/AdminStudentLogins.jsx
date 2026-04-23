import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminStudent = () => {
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({ name: '', roll: '', branch: '', entry: '', img: '' });

    const fetchStudents = async () => {
        try {
            const res = await axios.get('https://lms-backend-01-yn35.onrender.com/api/students');
            setList(res.data);
        } catch (err) { console.error("Fetch error", err); }
    };

    useEffect(() => { fetchStudents(); }, []);

    const handleAdd = async () => {
        if (!form.img || !form.name || !form.roll) {
            alert("Please fill all details");
            return;
        }
        await axios.post('https://lms-backend-01-yn35.onrender.com/api/students', form);
        setShow(false);
        fetchStudents();
        setForm({ name: '', roll: '', branch: '', entry: '', img: '' });
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            await axios.delete(`https://lms-backend-01-yn35.onrender.com/api/students/${id}`);
            fetchStudents();
        }
    };

    const handleEdit = async (s) => {
        const newName = prompt("Edit Name", s.name);
        const newRoll = prompt("Edit Roll Number", s.roll);
        const newBranch = prompt("Edit Branch", s.branch);
        const newEntry = prompt("Edit Entry Type", s.entry);

        if (newName) {
            await axios.put(`https://lms-backend-01-yn35.onrender.com/api/students/${s._id}`, {
                ...s, name: newName, roll: newRoll, branch: newBranch, entry: newEntry
            });
            fetchStudents();
        }
    };

    return (
        <div style={{ fontFamily: 'sans-serif' }}>
            <style>{`
                .container { border: 3px solid black; width: 350px; text-align: center; padding: 20px; margin: 30px 0; font-size: 20px; border-radius: 10px; color: black; background-color: aliceblue; transition: 0.5s; }
                .container:hover { transform: scale(0.9); }
                .main { display: flex; column-gap: 20px; flex-wrap: wrap; row-gap: 20px; background-color: #1e40af; justify-content: space-evenly; padding: 20px; }
                
                /* Default Blue Buttons */
                button { background-color: #1e40af; color: white; cursor: pointer; border: none; padding: 8px 15px; border-radius: 5px; margin: 5px; font-weight: bold; }
                
                /* Explicit Edit (Blue) and Delete (Red) */
                .btn-edit { background-color: #2563eb !important; } 
                .btn-delete { background-color: #dc2626 !important; }
                
                .btn-add { border-style: ridge; padding: 5px; font-size: 13px; float: right; border-radius: 3px; background-color: #1e40af; color: aliceblue; }
                
                img { border-style: solid; border-radius: 50%; height: 150px; width: 150px; object-fit: cover; }
                h2 { color: #1e40af; }
                .heading:hover { transform: scale(1.05); transition: 0.5s; }
            `}</style>

            <div className="head">
                {/* Heading made smaller (20px) */}
                <h1 style={{ textAlign: 'center', border: 'solid black', borderRadius: '6px', padding: '5px', fontSize: '20px' }} className="heading">
                    Student details
                </h1>
            </div>

            <button className="btn-add" onClick={() => setShow(true)}>Add Student</button>
            <h2>Total Students: <span>{list.length}</span></h2>

            {show && (
                <div style={{ textAlign: 'center', margin: '20px', border: '2px dashed blue', padding: '15px' }}>
                    <input type="file" onChange={e => {
                        const reader = new FileReader();
                        reader.readAsDataURL(e.target.files[0]);
                        reader.onloadend = () => setForm({ ...form, img: reader.result });
                    }} /><br /><br />
                    <input placeholder="Student Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    <input placeholder="Roll Number" value={form.roll} onChange={e => setForm({ ...form, roll: e.target.value })} />
                    <input placeholder="Branch" value={form.branch} onChange={e => setForm({ ...form, branch: e.target.value })} />
                    <input placeholder="Entry Type" value={form.entry} onChange={e => setForm({ ...form, entry: e.target.value })} />
                    <br /><br />
                    <button onClick={handleAdd}>Add</button>
                    <button onClick={() => setShow(false)} style={{ backgroundColor: 'gray' }}>Cancel</button>
                </div>
            )}

            <div className="main">
                {list.map(s => (
                    <div className="container" key={s._id}>
                        <h2>{s.name} details</h2>
                        <img src={s.img} alt="stu" />
                        <p>{s.name}</p>
                        <p>{s.roll}</p>
                        <p>{s.branch}</p>
                        <p>{s.entry}</p>
                        <button className="btn-edit" onClick={() => handleEdit(s)}>Edit</button>
                        <button className="btn-delete" onClick={() => handleDelete(s._id)}>Delete User</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminStudent;