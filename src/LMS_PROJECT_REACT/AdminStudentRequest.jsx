import React from 'react';
import { Link } from 'react-router-dom';

const AdminStudentRequest = () => {
  // We put the data in an array so it's easy to manage
  const requests = [
    { name: "Rahul", type: "Book Request", msg: "Please add Python Programming book", date: "12/07/2026", status: "Pending" },
    { name: "Priya", type: "Feedback", msg: "Library timing should extend", date: "13/07/2026", status: "Pending" }
  ];

  return (
    <div className="admin-stu-req-page">
      <style>{`
        .admin-stu-req-page {
          font-family: Arial, sans-serif;
          background-image: url("back_per.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          min-height: 100vh;
          padding: 20px;
        }

        .back-link {
          color: white;
          text-decoration: none;
          font-weight: bold;
          background: #1e40af;
          padding: 10px;
          border-radius: 5px;
          display: inline-block;
          margin-bottom: 10px;
        }

        h1 {
          text-align: center;
          color: white;
          border: 3px solid white;
          padding: 15px;
          background-color: #1e40af;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
          transition: 0.5s;
        }

        table:hover {
          transform: scale(1.02);
        }

        th {
          background: #dbeafe;
          color: #1e40af;
          border: 1px solid #1e40af;
          padding: 12px;
        }

        td {
          background: #f1f5f9;
          border: 1px solid #1e40af;
          padding: 10px;
          text-align: center;
        }

        .status-pending {
          color: #b91c1c;
          font-weight: bold;
        }
      `}</style>

      <Link to="/admin-mp" className="back-link">← Back to Admin Home</Link>

      <h1>Student Requests</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Request Type</th>
            <th>Message</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req, index) => (
            <tr key={index}>
              <td>{req.name}</td>
              <td>{req.type}</td>
              <td>{req.msg}</td>
              <td>{req.date}</td>
              <td className="status-pending">{req.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminStudentRequest;