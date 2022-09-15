import { useState } from "react";

function BaseForm({ title, handleClick }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button className="text-white border-2" onClick={() => handleClick(email, password)}>{title}</button>
    </div>
  );
}

export default BaseForm;
