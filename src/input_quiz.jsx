import React, { useState } from 'react';

const baris = { marginBottom: '10px' };
const label = { display: 'inline-block', width: '60px' };

function InputQuiz() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [alamat, setAlamat] = useState('');

  return (
    <div>
      <h2>Input Data</h2>

      <div style={baris}>
        <label style={label}>Nama:</label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Masukkan Nama ..."
        />
      </div>
      <div style={baris}>
        <label style={label}>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan Email ..."
        />
      </div>
      <div style={baris}>
        <label style={label}>Alamat:</label>
        <input
          type="text"
          value={alamat}
          onChange={(e) => setAlamat(e.target.value)}
          placeholder="Masukkan Alamat ..."
        />
      </div>

      <h3>Hasil Inputan:</h3>
      <p>Nama: {nama}</p>
      <p>Email: {email}</p>
      <p>Alamat: {alamat}</p>
    </div>
  );
}

export default InputQuiz;