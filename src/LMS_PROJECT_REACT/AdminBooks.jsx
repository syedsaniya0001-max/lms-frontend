import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminBooks = () => {
    const [books, setBooks] = useState([]);
    const [form, setForm] = useState({ name: '', author: '', code: '', img: '' });
    const [searchTerm, setSearchTerm] = useState('');

    const fetchBooks = async () => {
        try {
            const res = await axios.get('https://lms-backend-01-yn35.onrender.com/api/books');
            setBooks(res.data);
        } catch (err) { console.error("Error fetching books", err); }
    };

    useEffect(() => { fetchBooks(); }, []);

    const handleAddBook = async () => {
        if (!form.name || !form.author || !form.code || !form.img) {
            alert("Fill all fields & select image");
            return;
        }
        await axios.post('https://lms-backend-01-yn35.onrender.com/api/books', {
            name: form.name,
            author: form.author,
            code: form.code,
            cover: form.img,
            status: "Available"
        });
        setForm({ name: '', author: '', code: '', img: '' });
        fetchBooks();
    };

   const handleIssue = async (book) => {
    if (book.status === "Issued") return alert("Book already issued!");
    const student = prompt("Enter Student Name");
    if (!student) return;

    const today = new Date();
    const due = new Date();
    due.setDate(today.getDate() + 7);

    // 1. SAVE TO DATABASE HISTORY
    await axios.post('https://lms-backend-01-yn35.onrender.com/api/history', {
        type: "issue",
        book: book.name,
        student: student,
        date: today.toLocaleDateString()
    });

    // 2. UPDATE BOOK STATUS
    await axios.put(`https://lms-backend-01-yn35.onrender.com/api/books/${book._id}`, {
        ...book,
        status: "Issued",
        studentName: student,
        issueDate: today.toLocaleDateString(),
        dueDate: due.toLocaleDateString()
    });
    fetchBooks();
};
    const handleReturn = async (book) => {
        let fine = 0;
        if (book.dueDate) {
            const today = new Date();
            const dueDate = new Date(book.dueDate);
            const diff = today - dueDate;
            const lateDays = Math.floor(diff / (1000 * 60 * 60 * 24));
            if (lateDays > 0) {
                fine = lateDays * 10;
                alert("Late Return! Fine: ₹" + fine);
            }
        }

        // 1. SAVE TO DATABASE HISTORY
    await axios.post('https://lms-backend-01-yn35.onrender.com/api/history', {
        type: "return",
        book: book.name,
        student: book.studentName,
        date: new Date().toLocaleDateString()
    });

    // 2. UPDATE BOOK STATUS
    await axios.put(`https://lms-backend-01-yn35.onrender.com/api/books/${book._id}`, {
        ...book, status: "Available", studentName: "", issueDate: "", dueDate: "", fine: 0
    });
    fetchBooks();
    };

const handleEdit = async (book) => {
  const newName = prompt("New Book Name", book.name);
  const newAuthor = prompt("New Author Name", book.author); // Don't miss this!
  
  if (newName && newAuthor) {
    await axios.put(`https://lms-backend-01-yn35.onrender.com/api/books/${book._id}`, {
      ...book,
      name: newName,
      author: newAuthor
    });
    fetchBooks();
  }
};

    const filteredBooks = books.filter(b => 
        b.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        b.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ backgroundColor: '#1e40af', minHeight: '100vh', padding: '20px' }}>
            <style>{`
                h1 { text-align: center; border: 3px solid white; color: aliceblue; background-color: #1e40af; padding: 20px; font-size: 24px; }
                .main-dash { display: flex; justify-content: center; gap: 30px; margin: 20px 0; }
                .container { border: 3px solid black; padding: 20px; text-align: center; background-color: aliceblue; width: 200px; border-radius: 8px; transition: 0.3s; }
                .container:hover { transform: scale(1.05); }
                table { width: 100%; border-collapse: collapse; background: white; margin-top: 20px; }
                th, td { border: 1px solid #1e40af; padding: 10px; text-align: center; color: #1e40af; font-size: 14px; }
                th { background-color: #dbeafe; }
                .book-cover { width: 50px; height: 50px; object-fit: cover; }
                
                button { padding: 6px 12px; margin: 2px; border: none; border-radius: 5px; color: white; cursor: pointer; font-weight: bold; }
                .issue { background: #10b981; }
                .return { background: #f59e0b; }
                .edit { background: #2563eb; } /* Blue Edit */
                .delete { background: #ef4444; } /* Red Delete */
                .add-btn { background: green; padding: 10px 20px; }
            `}</style>

            <h1>📚 BOOKS 📚</h1>

            <div className="main-dash">
                <div className="container"><h3>Total Books</h3><p>{books.length}</p></div>
                <div className="container"><h3>Issued</h3><p>{books.filter(b => b.status === "Issued").length}</p></div>
                <div className="container"><h3>Returned</h3><p>{books.filter(b => b.status === "Available").length}</p></div>
            </div>

            <div style={{ textAlign: 'right', marginBottom: '20px' }}>
                <input 
                    style={{ padding: '10px', width: '300px', borderRadius: '5px', border: 'none' }}
                    placeholder="Search by Book, Author, or Code..." 
                    onChange={e => setSearchTerm(e.target.value)} 
                />
            </div>

            <div style={{ textAlign: 'center', marginBottom: '30px', background: 'aliceblue', padding: '20px', borderRadius: '10px' }}>
                <input placeholder="Book Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={{ margin: '5px', padding: '8px' }} />
                <input placeholder="Author Name" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} style={{ margin: '5px', padding: '8px' }} />
                <input placeholder="Book Code" value={form.code} onChange={e => setForm({ ...form, code: e.target.value })} style={{ margin: '5px', padding: '8px' }} />
                <input type="file" onChange={e => {
                    const reader = new FileReader();
                    reader.readAsDataURL(e.target.files[0]);
                    reader.onloadend = () => setForm({ ...form, img: reader.result });
                }} style={{ margin: '5px' }} />
                <button className="add-btn" onClick={handleAddBook}>Add Book</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Cover</th>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Code</th>
                        <th>Status</th>
                        <th>Student</th>
                        <th>Issue Date</th>
                        <th>Due Date</th>
                        <th>Fine</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBooks.map(b => (
                        <tr key={b._id}>
                            <td><img src={b.cover} className="book-cover" alt="cover" /></td>
                            <td>{b.name}</td>
                            <td>{b.author}</td>
                            <td>{b.code}</td>
                            <td>{b.status}</td>
                            <td>{b.studentName || "-"}</td>
                            <td>{b.issueDate || "-"}</td>
                            <td>{b.dueDate || "-"}</td>
                            <td>₹{b.fine || 0}</td>
                            <td>
                                <button className="issue" onClick={() => handleIssue(b)}>Issue</button>
                                <button className="return" onClick={() => handleReturn(b)}>Return</button>
                                <button className="edit" onClick={() => handleEdit(b)}>Edit</button>
                                <button className="delete" onClick={async () => { if(window.confirm("Delete?")) { await axios.delete(`https://lms-backend-01-yn35.onrender.com/api/books/${b._id}`); fetchBooks(); } }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminBooks;