import { useState } from "react";

function MultiForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState(""); // tambahkan state error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); //simpan hasil ke state

    //validasi sederhana
    if (!formData.username || !formData.password) {
      setError("wajib diisi!");
      setSubmittedData(null);
      return;
    }
    if (formData.password.length < 6) {
      setError("Password minimal 6 karakter!");
      setSubmittedData(null);
      return;
    }

    setError("");
    setSubmittedData(formData);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="username" value={formData.username} onChange={handleChange} />
        <br />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        <br />
        <button type="submit">Login</button>
      </form>
      {/* tampilkan pesan error jika ada */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* tampilkan hasil input kalau valid */}
      {submittedData && (
        <div style={{ marginTop: "20px", color: "#00ffaa" }}>
          <h4>Hasil Input:</h4>
          <p>Username: {submittedData.username}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default MultiForm;
