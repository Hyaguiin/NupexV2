import React, { useState } from "react";
import Calendar from "react-calendar";
import { toast } from "react-toastify";

// Função para calcular o intervalo de datas
const getDateRange = (startDate, endDate) => {
  const range = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    range.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return range;
};

const DurationScale = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedDates, setSelectedDates] = useState([]);
  const [error, setError] = useState("");

  const handleDateChange = (dates) => {
    if (dates.length === 2) {
      const [start, end] = dates;
      if (start > end) {
        setError("A data de início não pode ser posterior à data de término.");
        return;
      }

      setStartDate(start);
      setEndDate(end);
      setError("");
      const range = getDateRange(start, end);
      setSelectedDates(range);
    }
  };

  const handleSave = () => {
    if (!startDate || !endDate) {
      toast.error("Selecione um período para a escala.");
      return;
    }

    // Exemplo de como você pode processar os dados, como salvar no backend ou mostrar no UI
    toast.success(`Período selecionado: ${startDate.toLocaleDateString()} até ${endDate.toLocaleDateString()}`);
  };

  return (
    <div className="scale-selection">
      <h1>Escolha o Período da Escala</h1>
      <Calendar
        selectRange
        onChange={handleDateChange}
        value={startDate && endDate ? [startDate, endDate] : null}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleSave} disabled={!startDate || !endDate}>
        Salvar Escala
      </button>
      {selectedDates.length > 0 && (
        <div>
          <h3>Período Selecionado:</h3>
          <ul>
            {selectedDates.map((date, index) => (
              <li key={index}>{date.toLocaleDateString()}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DurationScale;
