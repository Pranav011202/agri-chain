import React, { useState } from 'react';

function ContractForm() {
  const [formData, setFormData] = useState({
    cropType: '',
    state: '',
    price: '',
    quantity: '',
    terms: '',
    payment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Contract Created Successfully!');
    setFormData({
      cropType: '',
      state: '',
      price: '',
      quantity: '',
      terms: '',
      payment: '',
    });
  };

  return (
    <div style={{ backgroundColor: '#1c1c1e', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', padding: '20px', fontSize: '32px', color: '#ffc107' }}>
        Contract Form
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#292929',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
          Type of Crops:
          <select
            name="cropType"
            value={formData.cropType}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '5px',
              border: 'none',
            }}
          >
            <option value="">Select type of crops</option>
            <option value="Wheat">Wheat</option>
            <option value="Rice">Rice</option>
            <option value="Maize">Maize</option>
          </select>
        </label>

        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
          State:
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '5px',
              border: 'none',
            }}
          >
            <option value="">Select state</option>
            <option value="Haryana">Haryana</option>
            <option value="Punjab">Punjab</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
          </select>
        </label>

        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
          Price per Kg:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '5px',
              border: 'none',
            }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
          Expected Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '5px',
              border: 'none',
            }}
          />
        </label>

        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
          Contract Terms:
          <textarea
            name="terms"
            value={formData.terms}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '5px',
              border: 'none',
            }}
          ></textarea>
        </label>

        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
          Down Payment:
          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              borderRadius: '5px',
              border: 'none',
            }}
          >
            <option value="">Select payment option</option>
            <option value="Partial">Partial</option>
            <option value="Full">Full</option>
          </select>
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: '#ffc107',
            color: 'black',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Submit Contract
        </button>
      </form>
    </div>
  );
}

export default ContractForm;
