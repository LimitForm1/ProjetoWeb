document.getElementById('agendamentoForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const curso = document.getElementById('curso').value;
  const atlética = document.getElementById('atlética').value;
  const quadra = document.getElementById('quadra').value;
  const data = document.getElementById('data').value;

  alert(`Agendamento realizado!\n\nNome: ${nome}\nCurso: ${curso}\nAtlética: ${atlética}\nQuadra: ${quadra}\nData: ${data}`);
});
