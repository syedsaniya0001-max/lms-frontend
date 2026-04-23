import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminFaculty = () => {
    const [list, setList] = useState([]);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({ name: '', fid: '', subject: '', dept: '', img: '' });

    // Fetch from DB
    const fetchFaculties = async () => {
        try {
            const res = await axios.get('https://lms-backend-01-yn35.onrender.com/api/faculties');
            setList(res.data);
        } catch (err) { console.error("Fetch error", err); }
    };

    useEffect(() => { fetchFaculties(); }, []);

    // Add to DB
    const handleAdd = async () => {
        if (!form.img || !form.name || !form.fid) {
            alert("Fill all fields");
            return;
        }
        await axios.post('https://lms-backend-01-yn35.onrender.com/api/faculties', form);
        setShow(false); 
        fetchFaculties();
        setForm({ name: '', fid: '', subject: '', dept: '', img: '' });
    };

    // Delete from DB
    const handleDelete = async (id) => {
        if (window.confirm("Are you sure?")) {
            await axios.delete(`https://lms-backend-01-yn35.onrender.com/api/faculties/${id}`);
            fetchFaculties();
        }
    };

    // Edit in DB
    const handleEdit = async (f) => {
        const newName = prompt("Edit Name", f.name);
        const newFid = prompt("Edit ID", f.fid);
        const newSub = prompt("Edit Subject", f.subject);
        const newDept = prompt("Edit Dept", f.dept);

        if (newName) {
            await axios.put(`https://lms-backend-01-yn35.onrender.com/api/faculties/${f._id}`, {
                ...f, name: newName, fid: newFid, subject: newSub, dept: newDept
            });
            fetchFaculties();
        }
    };

    return (
        <div style={{fontFamily:'sans-serif'}}>
            <style>{`
                .container { border:3px solid black; width:350px; text-align:center; padding:20px; margin:30px 0; font-size: 15px; border-radius: 10px; background-color: aliceblue; transition: 0.5s; }
                .container:hover { transform: scale(0.9); }
                .main { display:flex; column-gap:20px; flex-wrap: wrap; row-gap: 20px; background-color: #1e40af; justify-content: space-evenly; padding: 20px; }
                button { background-color: #1e40af; color:white; cursor: pointer; border: none; padding: 5px 10px; border-radius: 3px; margin: 5px; }
                .btn { padding:5px; font-size:13px; float:right; border-radius:3px; }
                img { border-radius:50%; height:150px; width:150px; object-fit: cover; border: 1px solid black; }
                .first { border:3px solid black; height:fit-content; padding: 10px; text-align: center; }
                h1{color:#1e40af;}
            `}</style>

            <div className="first">
                <h1>Faculty Details 
                    <button className="btn" onClick={() => setShow(true)}>Add Faculty</button>
                </h1>
            </div>

            <h2>Total Faculty: <span>{list.length}</span></h2>

            {/* FORM BOX */}
            {show && (
                <div style={{textAlign:'center', padding:'20px', border:'2px dashed #1e40af', margin:'10px'}}>
                    <input type="file" onChange={e => {
                        const reader = new FileReader();
                        reader.readAsDataURL(e.target.files[0]);
                        reader.onloadend = () => setForm({...form, img: reader.result});
                    }} /><br/><br/>
                    <input placeholder="Faculty Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                    <input placeholder="Faculty ID" value={form.fid} onChange={e => setForm({...form, fid: e.target.value})} />
                    <input placeholder="Subject" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
                    <input placeholder="Department" value={form.dept} onChange={e => setForm({...form, dept: e.target.value})} />
                    <br/><br/>
                    <button onClick={handleAdd}>Add</button>
                    <button onClick={() => setShow(false)} style={{backgroundColor:'red'}}>Cancel</button>
                </div>
            )}

            {/* CARDS MAIN AREA */}
            <div className="main">
                {list.map(f => (
                    <div className="container" key={f._id}>
                        <h1>{f.name} details</h1>
                        <img src={f.img} alt="fac" />
                        <p>{f.name}</p>
                        <p>{f.fid}</p>
                        <p>{f.subject}</p>
                        <p>{f.dept}</p>
                        <button onClick={() => handleEdit(f)}>Edit</button>
                        <button style={{backgroundColor:'red'}} onClick={() => handleDelete(f._id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default AdminFaculty;