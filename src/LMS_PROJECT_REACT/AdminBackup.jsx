import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdminBackup = () => {
  // Initialize state from localStorage
  const [backups, setBackups] = useState(() => {
    const saved = localStorage.getItem("backups");
    return saved ? JSON.parse(saved) : [];
  });
  const [inputText, setInputText] = useState("");

  // Sync state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("backups", JSON.stringify(backups));
  }, [backups]);

  const handleBackup = () => {
    if (inputText.trim() === "") {
      alert("Enter some data!");
      return;
    }
    const newBackup = {
      text: inputText,
      time: new Date().toLocaleString()
    };
    setBackups([...backups, newBackup]);
    setInputText("");
  };

  const handleRestore = (text) => {
    alert("Restored: " + text);
  };

  const deleteOne = (index) => {
    const updated = backups.filter((_, i) => i !== index);
    setBackups(updated);
  };

  const deleteAll = () => {
    if (window.confirm("Delete all backup history?")) {
      setBackups([]);
    }
  };

  const downloadData = () => {
    const dataStr = JSON.stringify(backups, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "backup.json";
    a.click();
  };

  return (
    <div className="backup-page-body">
      <style>{`
        .backup-page-body {
          font-family: Arial, sans-serif;
          background: #1e40af;
          text-align: center;
          min-height: 100vh;
          padding: 20px;
        }
        .container { width: 80%; margin: auto; }
        
        .header {
          height: 90px;
          background-color: #1e40af;
          border-radius: 5px;
          border: 1px solid black;
          box-shadow: 5px 5px 15px #74737388;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 20px;
        }
        .header h1 { color: white; margin-right: auto; font-size: 24px; }
        .header img { width: 150px; padding: 10px; }

        .content {
          background-color: aliceblue;
          border-radius: 15px;
          box-shadow: 5px 5px 15px #74737388;
          margin: 35px 0;
          padding: 25px;
          text-align: left;
        }
        .content h3 { color: #1e40af; margin-top: 0; }

        .backup-input {
          padding: 10px;
          width: 60%;
          margin-top: 20px;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        .controls button {
          padding: 10px 15px;
          margin: 10px;
          border: none;
          background: blue;
          color: white;
          border-radius: 5px;
          cursor: pointer;
          transition: 0.3s;
        }
        .controls button:hover { background: darkblue; }

        .history { margin-top: 20px; text-align: left; }
        .item {
          background: white;
          padding: 15px;
          margin: 10px 0;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        }
        .item b { font-size: 18px; color: #333; }
        
        .back-link { color: white; text-decoration: none; float: left; font-weight: bold; margin-bottom: 10px; }
      `}</style>

      <div className="container">
        <Link to="/admin-mp" className="back-link">← BACK</Link>
        <div className="header">
          <h1>Backup and Restore</h1>
          <img src="logo.png" alt="logo" />
        </div>

        <div className="content">
          <h3>What is Backup?</h3>
          <p>Backup is the process of creating copies of data to protect it from loss, damage, or corruption...</p>

          <h3>What is Restore?</h3>
          <p>Restore is the process of retrieving data from a backup and returning it to its original location...</p>

          <h3>Importance of Backup and Restore</h3>
          <p>Backup and restore are essential for data security and reliability. They help prevent permanent data loss...</p>
        </div>

        <input 
          type="text" 
          className="backup-input"
          placeholder="Enter data to backup" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <div className="controls">
          <button onClick={handleBackup}>Backup</button>
          <button onClick={deleteAll} style={{ backgroundColor: '#dc2626' }}>Delete All</button>
          <button onClick={downloadData} style={{ backgroundColor: '#059669' }}>Download JSON</button>
        </div>

        <h3 style={{ color: 'white', marginTop: '30px' }}>Backup History</h3>
        <div className="history">
          {backups.length === 0 ? (
            <p style={{ color: 'white', textAlign: 'center' }}>No backups found.</p>
          ) : (
            backups.map((item, index) => (
              <div className="item" key={index}>
                <div>
                  <b>{item.text}</b><br />
                  <small style={{ color: '#666' }}>{item.time}</small>
                </div>
                <div>
                  <button onClick={() => handleRestore(item.text)} style={{ background: '#1e40af' }}>Restore</button>
                  <button onClick={() => deleteOne(index)} style={{ background: '#dc2626' }}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBackup;