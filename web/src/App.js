// App.js
import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [formData, setFormData] = useState({
    nome: "",
    curso: "",
    atlética: "",
    quadra: "",
    horario: ""
  });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const [isFlipped, setIsFlipped] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setIsFlipped(true);
    setTimeout(() => {
      setShowThankYou(true);
    }, 500);
  };

  const handleThankYouClose = () => {
    setShowThankYou(false);
    setIsFlipped(false);
    setShowConfirmation(false);
    setFormData({
      nome: "",
      curso: "",
      atlética: "",
      quadra: "",
      horario: ""
    });
  };

  return (
    <div className={`container ${isFlipped ? "flipped" : ""}`}>
      <h1>Agendamento de Quadras</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome Completo:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <label htmlFor="curso">Curso:</label>
        <input
          type="text"
          id="curso"
          name="curso"
          value={formData.curso}
          onChange={handleChange}
          required
        />

        <label htmlFor="atlética">Atlética:</label>
        <input
          type="text"
          id="atlética"
          name="atlética"
          value={formData.atlética}
          onChange={handleChange}
          required
        />

        <label htmlFor="quadra">Quadra desejada:</label>
        <select
          id="quadra"
          name="quadra"
          value={formData.quadra}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a court
          </option>
          <option value="quadra18">Quadra 18</option>
          <option value="quadra20">Quadra 20</option>
          <option value="quadra29">Quadra 29</option>
          <option value="quadra52">Quadra 52</option>
        </select>

        <label htmlFor="horario">Horário desejado:</label>
        <select
          id="horario"
          name="horario"
          value={formData.horario}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a time
          </option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
          <option value="22:00">22:00</option>
        </select>

        <button type="submit">Agendar</button>
      </form>

      {(showConfirmation || showThankYou) && (
        <div className={`confirmation-message ${isFlipped ? "flipped" : ""}`}>
          {showConfirmation && (
            <p>
              Agendamento realizado com sucesso!
              <br />
              Nome: {formData.nome}
              <br />
              Curso: {formData.curso}
              <br />
              Atlética: {formData.atlética}
              <br />
              Quadra: {formData.quadra}
              <br />
              Horário: {formData.horario}
            </p>
          )}

          {showThankYou && (
            <p
              style={{
                backgroundColor: "#28a745",
                color: "white",
                padding: "15px"
              }}
            >
              Obrigado pelo agendamento!
            </p>
          )}

          <button onClick={handleConfirmationClose}>Fechar</button>
        </div>
      )}

      {showThankYou && (
        <div className={`confirmation-message ${isFlipped ? "flipped" : ""}`}>
          <p
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "15px"
            }}
          >
            Obrigado pelo agendamento!
          </p>
          <button onClick={handleThankYouClose}>Fechar</button>
        </div>
      )}
    </div>
  );
};

export default App;
