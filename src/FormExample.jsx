import React, { useState } from "react";

function FormExample() {
  // state untuk menampung nilai input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //event submit
  const handleSubmit = (e) => {
    e.preventDefault(); // supaya tidak reload halaman
    alert(`Nama: ${name}, Email: ${email}`);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Form Handling Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

export default FormExample;
