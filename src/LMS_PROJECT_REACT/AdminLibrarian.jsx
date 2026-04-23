import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminLibrarian = () => {
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({ name: '', dept: '', img: '' });

    // Fetch from MongoDB
    const fetchLibrarians = async () => {
        try {
            const res = await axios.get('https://lms-backend-01-yn35.onrender.com/api/librarians');
            setList(res.data);
        } catch (err) { console.error("Fetch error", err); }
    };

    useEffect(() => { fetchLibrarians(); }, []);

    // Add to MongoDB
    const handleAdd = async () => {
        if (!form.img || !form.name || !form.dept) {
            alert("Please fill all details and select an image!");
            return;
        }
        await axios.post('https://lms-backend-01-yn35.onrender.com/api/librarians', form);
        setShow(false);
        fetchLibrarians();
        setForm({ name: '', dept: '', img: '' });
    };

    // Delete from MongoDB
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this librarian?")) {
            await axios.delete(`https://lms-backend-01-yn35.onrender.com/api/librarians/${id}`);
            fetchLibrarians();
        }
    };

    // Edit in MongoDB (Simplified version of your inline edit logic)
    const handleEdit = async (lib) => {
        const newName = prompt("Edit Name", lib.name);
        const newDept = prompt("Edit Department", lib.dept);

        if (newName && newDept) {
            await axios.put(`https://lms-backend-01-yn35.onrender.com/api/librarians/${lib._id}`, {
                ...lib, name: newName, dept: newDept
            });
            fetchLibrarians();
        }
    };

    return (
        <div style={{ fontFamily: 'sans-serif' }}>
            <style>{`
                .container { border: 3px solid black; width: 350px; text-align: center; padding: 20px; margin: 20px; border-radius: 10px; background-color: aliceblue; color: black; transition: 0.3s; }
                .container:hover { transform: scale(0.95); }
                .main { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; background-color: #1e40af; padding: 20px 0; min-height: 400px; }
                
                h1 { color: #1e40af; font-size: 20px; }
                
                button { margin: 10px 5px; background-color: #1e40af; color: white; border-radius: 5px; cursor: pointer; border: none; padding: 8px 15px; font-weight: bold; }
                .btn-add { float: right; padding: 5px; font-size: 13px; }
                .btn-edit { background-color: #2563eb !important; }
                .btn-delete { background-color: #dc2626 !important; }
                
                img { border: 2px solid black; border-radius: 50%; width: 150px; height: 150px; object-fit: cover; }
                .one { display: flex; justify-content: space-between; padding: 0 20px; align-items: center; }
                .header-title { text-align: center; border: solid black; padding: 10px; border-radius: 5px; margin: 10px; font-size: 20px; color: #1e40af; }
            `}</style>

            <h1 className="header-title">Librarian Details</h1>
            
            <div className="one">
                <h2>Total Librarians: <span>{list.length}</span></h2>
                <button className="btn-add" onClick={() => setShow(true)}>Add Librarian</button>
            </div>

            {/* FORM BOX */}
            {show && (
                <div style={{ textAlign: 'center', margin: '20px', border: '2px dashed blue', padding: '15px' }}>
                    <input type="file" onChange={e => {
                        const reader = new FileReader();
                        reader.readAsDataURL(e.target.files[0]);
                        reader.onloadend = () => setForm({ ...form, img: reader.result });
                    }} /><br /><br />
                    <input placeholder="Librarian Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    <input placeholder="Department" value={form.dept} onChange={e => setForm({ ...form, dept: e.target.value })} />
                    <br /><br />
                    <button onClick={handleAdd}>Add</button>
                    <button onClick={() => setShow(false)} style={{ backgroundColor: 'gray' }}>Cancel</button>
                </div>
            )}

            {/* CARDS DISPLAY */}
            <div className="main">
                {list.map(lib => (
                    <div className="container" key={lib._id}>
                        <h1>{lib.name} details</h1>
                        <img src={lib.img} alt="lib" />
                        <p>{lib.name}</p>
                        <p>{lib.dept}</p>
                        <button className="btn-edit" onClick={() => handleEdit(lib)}>Edit</button>
                        <button className="btn-delete" onClick={() => handleDelete(lib._id)}>Delete User</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminLibrarian;