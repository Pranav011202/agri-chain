import React from 'react';

function AdminPanel() {
  return (
    <div style={{ backgroundColor: '#1c1c1e', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', padding: '20px', color: '#ffc107', fontSize: '32px' }}>
        Admin Panel - Reports
      </h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', color: 'white' }}>
        <thead>
          <tr style={{ backgroundColor: '#292929', color: '#ffc107', textAlign: 'left' }}>
            <th style={{ padding: '10px', border: '1px solid #444' }}>ID</th>
            <th style={{ padding: '10px', border: '1px solid #444' }}>Timestamp</th>
            <th style={{ padding: '10px', border: '1px solid #444' }}>Crops</th>
            <th style={{ padding: '10px', border: '1px solid #444' }}>State</th>
            <th style={{ padding: '10px', border: '1px solid #444' }}>Price</th>
            <th style={{ padding: '10px', border: '1px solid #444' }}>Quantity</th>
            <th style={{ padding: '10px', border: '1px solid #444' }}>Terms</th>
            <th style={{ padding: '10px', border: '1px solid #444' }}>Payment</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', border: '1px solid #444' }}>1</td>
            <td style={{ padding: '10px', border: '1px solid #444' }}>2024-11-18</td>
            <td style={{ padding: '10px', border: '1px solid #444' }}>Wheat</td>
            <td style={{ padding: '10px', border: '1px solid #444' }}>Haryana</td>
            <td style={{ padding: '10px', border: '1px solid #444' }}>₹2000</td>
            <td style={{ padding: '10px', border: '1px solid #444' }}>50kg</td>
            <td style={{ padding: '10px', border: '1px solid #444' }}>Advance</td>
            <td style={{ padding: '10px', border: '1px solid #444' }}>Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AdminPanel;
