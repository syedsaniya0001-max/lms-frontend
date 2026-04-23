import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LibrarianDashboard = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [calcValues, setCalcValues] = useState({ num1: 0, num2: 0, result: 0 });
  const [issueReport, setIssueReport] = useState([]);
  const [returnReport, setReturnReport] = useState([]);
  const [allRequests, setAllRequests] = useState([]); // Combined Student & Faculty requests

  const fetchData = async () => {
    try {
      const resBooks = await axios.get('https://lms-backend-01-yn35.onrender.com/api/books');
      setBooks(resBooks.data);

      const resHistory = await axios.get('https://lms-backend-01-yn35.onrender.com/api/history');
      setIssueReport(resHistory.data.filter(h => h.type === 'issue'));
      setReturnReport(resHistory.data.filter(h => h.type === 'return'));

      const resRequests = await axios.get('https://lms-backend-01-yn35.onrender.com/api/requests');
      setAllRequests(resRequests.data);
    } catch (err) { console.error("Sync Error:", err); }
  };

  useEffect(() => { fetchData(); }, []);

  const handleAddBook = async () => {
    const name = document.getElementById("bookName").value.trim();
    const author = document.getElementById("authorName").value.trim();
    const code = document.getElementById("bookCode").value.trim();
    const file = document.getElementById("bookImage").files[0];

    if (!name || !author || !code || !file) return alert("Fill all fields & select image");

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        await axios.post('https://lms-backend-01-yn35.onrender.com/api/books', {
          name, author, code, cover: e.target.result,
          status: "Available", studentName: "", issueDate: "", dueDate: "", fine: 0
        });
        fetchData();
        document.getElementById("bookName").value = "";
        document.getElementById("authorName").value = "";
        document.getElementById("bookCode").value = "";
        document.getElementById("bookImage").value = "";
      } catch (err) { alert("Failed to add book"); }
    };
    reader.readAsDataURL(file);
  };

  const handleIssue = async (book, presetStudent = null) => {
    if (book.status === "Issued") return alert("Book already issued!");
    
    const student = presetStudent || prompt("Enter Name");
    if (!student) return;

    const today = new Date().toLocaleDateString();
    const due = new Date();
    due.setDate(new Date().getDate() + 7);

    try {
      await axios.post('https://lms-backend-01-yn35.onrender.com/api/history', {
          type: "issue", book: book.name, student, date: today
      });

      await axios.put(`https://lms-backend-01-yn35.onrender.com/api/books/${book._id}`, {
        ...book, status: "Issued", studentName: student, issueDate: today, dueDate: due.toLocaleDateString()
      });
      
      fetchData();
    } catch (err) { alert("Issue failed"); }
  };

  const handleDeleteRequest = async (id) => {
    try {
      await axios.delete(`https://lms-backend-01-yn35.onrender.com/api/requests/${id}`);
      fetchData();
    } catch (err) { alert("Action failed"); }
  };

  const handleReturn = async (book) => {
    if (book.status !== "Issued") return;
    const today = new Date();
    let fineAmount = 0;
    if (book.dueDate) {
        const dueDate = new Date(book.dueDate);
        const diff = today - dueDate;
        const lateDays = Math.floor(diff / (1000 * 60 * 60 * 24));
        if (lateDays > 0) fineAmount = lateDays * 10;
    }
    try {
        await axios.post('https://lms-backend-01-yn35.onrender.com/api/history', {
            type: "return", book: book.name, student: book.studentName, date: today.toLocaleDateString(), fine: fineAmount
        });
        await axios.put(`https://lms-backend-01-yn35.onrender.com/api/books/${book._id}`, {
            ...book, status: "Available", studentName: "", issueDate: "", dueDate: "", fine: 0
        });
        if (fineAmount > 0) alert(`Late Return! Fine: ₹${fineAmount}`);
        fetchData();
    } catch (err) { alert("Return failed"); }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this book?")) {
      try {
        await axios.delete(`https://lms-backend-01-yn35.onrender.com/api/books/${id}`);
        fetchData();
      } catch (err) { alert("Delete failed"); }
    }
  };

  const handleEdit = async (book) => {
    const newName = prompt("Edit Book Name", book.name);
    const newAuthor = prompt("Edit Author Name", book.author);
    if (newName || newAuthor) {
      try {
        await axios.put(`https://lms-backend-01-yn35.onrender.com/api/books/${book._id}`, {
          ...book, name: newName || book.name, author: newAuthor || book.author
        });
        fetchData();
      } catch (err) { alert("Edit failed"); }
    }
  };

  const calc = (op) => {
    let a = Number(calcValues.num1);
    let b = Number(calcValues.num2);
    let res = 0;
    if (op === "+") res = a + b;
    if (op === "-") res = a - b;
    if (op === "*") res = a * b;
    if (op === "/") res = a / b;
    setCalcValues({ ...calcValues, result: res });
  };

  const filteredBooks = books.filter(b => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    if(window.confirm("Are you sure you want to logout?")) { navigate('/'); }
  };

  return (
    <>
      <style>{`
        body { font-family: Arial, sans-serif; background-color: #1e40af; margin: 0; padding: 20px; color: #000; }
        h1 { text-align: center; border: 3px solid white; color: aliceblue; background-color: #1e40af; padding: 20px; cursor: pointer; }
        .main { display: flex; justify-content: center; gap: 30px; margin-top: 20px; margin-bottom: 40px; }
        .container { border: 3px solid black; padding: 20px; text-align: center; background-color: aliceblue; width: 200px; border-radius: 8px; transition: transform 0.3s; }
        .container:hover { transform: scale(1.05); }
        h2 { text-align: center; color:#1e40af; }
        .search-bar-container { text-align: right; margin-bottom: 30px; }
        #searchInput { width: 300px; padding: 8px; font-size: 16px; border: 2px solid #1e40af; border-radius: 5px; }
        
        .add-book-container { text-align: center; margin-bottom: 30px; background: aliceblue; padding: 20px; border-radius: 8px; }
        .add-book-container input { padding: 8px; margin: 5px; border: 2px solid #1e40af; border-radius: 5px; }
        .add-book-container button { padding: 8px 16px; background: green; color: white; border: none; border-radius: 5px; cursor: pointer; }

        table { width: 100%; border-collapse: collapse; margin-top: 20px; background: white; }
        th { background-color: #dbeafe; color: #1e40af; border: 1px solid #1e40af; padding: 10px; }
        td { background-color: #f1f5f9; color: #1e40af; border: 1px solid #1e40af; padding: 10px; text-align: center; }
        .book-cover { width: 50px; height: 50px; object-fit: cover; }
        
        button { padding: 5px 12px; margin: 2px; border: none; border-radius: 5px; color: white; cursor: pointer; }
        .issue { background: #10b981; }
        .return { background: #f59e0b; }
        .edit { background: #3b82f6; }
        .delete { background: #ef4444; }

        .tag-reserve { background: #f59e0b; color: white; padding: 2px 6px; border-radius: 4px; font-size: 11px; }
        .tag-borrow { background: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-size: 11px; }

        #calcPanel { width: 250px; margin: 40px auto; background: white; border: 2px solid #1e40af; border-radius: 8px; padding: 15px; text-align: center; box-shadow: 0 0 8px rgba(0,0,0,0.3); }
        #calcPanel input { width: 80%; margin: 5px 0; padding: 5px; border: 1px solid #1e40af; border-radius: 4px; }
        .calcBtns button { margin: 3px; padding: 5px 8px; background: #1e40af; color: white; border: none; border-radius: 4px; cursor: pointer; }
        .logout-footer { display: flex; justify-content: left; margin-top: 50px; padding-bottom: 50px; }
        .logout-btn-large { background:#1e04af; padding: 15px 40px; font-size: 18px; font-weight: bold; border-radius: 10px; border: 2px solid white; }
      `}</style>

      <h1>📚 Librarian Dashboard 👤</h1>

      <div className="main">
        <div className="container"><h2>Total Books</h2><p>{books.length}</p></div>
        <div className="container"><h2>Issued Books</h2><p>{books.filter(b => b.status === "Issued").length}</p></div>
        <div className="container"><h2>Returned Books</h2><p>{returnReport.length}</p></div>
      </div>

      <h2 style={{color:'white', textAlign:'center', marginTop:'40px'}}>🔔 Notifications & Requests</h2>
      <table>
        <thead>
          <tr><th>User Name</th><th>Book Name</th><th>Date</th><th>Type</th><th>Action</th></tr>
        </thead>
        <tbody>
         
         {allRequests.map((req) => {
  // 1. Link the request to the actual book data
  const linkedBook = books.find(b => 
    b.name.toLowerCase().trim() === req.bookName.toLowerCase().trim()
  );
  
  // 2. Determine if this is a "Borrow" or a "Reserve"
  const isIssued = linkedBook?.status === "Issued";
            return (
              <tr key={req._id}>
                <td>{req.studentName}</td>
                <td>{req.bookName}</td>
                <td>{req.requestDate}</td>
                <td>
                  {isIssued ? (
                    <span className="tag-reserve">RESERVE</span>
                  ) : (
                    <span className="tag-borrow">BORROW</span>
                  )}
                </td>
                <td>
                  {!isIssued && (
                    <button className="issue" onClick={() => {
                        handleIssue(linkedBook, req.studentName);
                        handleDeleteRequest(req._id);
                    }}>Approve</button>
                  )}
                  <button className="delete" onClick={() => handleDeleteRequest(req._id)}>
                    {isIssued ? "Clear" : "Reject"}
                  </button>
                </td>
              </tr>
            );
          })}
          {allRequests.length === 0 && <tr><td colSpan="5">No pending requests or reservations.</td></tr>}
        </tbody>
      </table>

      {/* Rest of the tables (Inventory, Reports, etc.) remain as they were */}
      <div className="search-bar-container">
        <input type="search" id="searchInput" placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      <div className="add-book-container">
        <input type="text" id="bookName" placeholder="Book Name" />
        <input type="text" id="authorName" placeholder="Author Name" />
        <input type="text" id="bookCode" placeholder="Book Code" />
        <input type="file" id="bookImage" accept="image/*" />
        <button onClick={handleAddBook}>Add Book</button>
      </div>

      <table id="booksTable">
        <thead>
          <tr>
            <th>Cover</th><th>Book Name</th><th>Author</th><th>Book Code</th><th>Status</th>
            <th>Issued To</th><th>Issue Date</th><th>Due Date</th><th>Fine</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((b) => (
            <tr key={b._id}>
              <td><img src={b.cover} className="book-cover" alt="" /></td>
              <td>{b.name}</td><td>{b.author}</td><td>{b.code}</td><td>{b.status}</td>
              <td>{b.studentName || ""}</td><td>{b.issueDate || ""}</td><td>{b.dueDate || ""}</td>
              <td>{b.fine || "0"}</td>
              <td>
                <button className="issue" onClick={() => handleIssue(b)}>Issue</button>
                <button className="return" onClick={() => handleReturn(b)}>Return</button>
                <button className="edit" onClick={() => handleEdit(b)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(b._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{color:'white', textAlign:'center', marginTop:'40px'}}>Issue Report</h2>
      <table>
        <thead><tr><th>Book</th><th>User</th><th>Date</th></tr></thead>
        <tbody>
          {issueReport.map((r, i) => <tr key={i}><td>{r.book}</td><td>{r.student}</td><td>{r.date}</td></tr>)}
        </tbody>
      </table>

      <h2 style={{color:'white', textAlign:'center', marginTop:'40px'}}>Return Report</h2>
      <table>
        <thead><tr><th>Book</th><th>User</th><th>Date</th></tr></thead>
        <tbody>
          {returnReport.map((r, i) => <tr key={i}><td>{r.book}</td><td>{r.student}</td><td>{r.date}</td></tr>)}
        </tbody>
      </table>

      <div id="calcPanel">
        <h3>🧮 Quick Calculator</h3>
        <input type="number" onChange={(e) => setCalcValues({...calcValues, num1: e.target.value})} />
        <input type="number" onChange={(e) => setCalcValues({...calcValues, num2: e.target.value})} />
        <div className="calcBtns">
          <button onClick={() => calc('+')}>+</button>
          <button onClick={() => calc('-')}>-</button>
          <button onClick={() => calc('*')}>*</button>
          <button onClick={() => calc('/')}>/</button>
        </div>
        <p>Result: <span id="result">{calcValues.result}</span></p>
      </div>

      <div className="logout-footer">
        <button className="logout-btn-large" onClick={handleLogout}>Log out</button>
      </div>
    </>
  );
};

export default LibrarianDashboard;