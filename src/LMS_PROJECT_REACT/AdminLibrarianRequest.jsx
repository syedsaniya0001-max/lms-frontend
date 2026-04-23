import React from 'react';
import { Link } from 'react-router-dom';

const AdminLibrarianRequest = () => {
  // Librarian data array
  const requests = [
    { name: "Ramesh", type: "System Issue", msg: "Barcode scanner not working", date: "16/07/2026", status: "Pending" },
    { name: "Sita", type: "Maintenance", msg: "System update required", date: "17/07/2026", status: "Resolved" }
  ];

  return (
    <div className="admin-lib-req-page">
      <style>{`
        .admin-lib-req-page {
          font-family: Arial, sans-serif;
          background-image: url("back_per.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          min-height: 100vh;
          padding: 20px;
          margin: 0;
        }

        .back-link {
          color: white;
          text-decoration: none;
          font-weight: bold;
          background: #1e40af;
          padding: 10px 15px;
          border-radius: 5px;
          display: inline-block;
          margin-bottom: 15px;
        }

        h1 {
          text-align: center;
          color: white;
          border: 3px solid white;
          padding: 15px;
          background-color: #1e40af;
          margin-top: 0;
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

        .status-resolved {
          color: #15803d;
          font-weight: bold;
        }
      `}</style>

      <Link to="/admin-mp" className="back-link">← Back to Admin Home</Link>

      <h1>Librarian Requests</h1>

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
              <td className={req.status === 'Pending' ? 'status-pending' : 'status-resolved'}>
                {req.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminLibrarianRequest;