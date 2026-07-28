const button = document.getElementById('actionButton');
const output = document.getElementById('output');

const pageState = {
  visits: 0,
  lastAction: null,
};

function render() {
  output.innerHTML = `
    <div class="card">
      <div><strong>Visits:</strong> ${pageState.visits}</div>
      <div><strong>Last action:</strong> ${pageState.lastAction ?? 'None yet'}</div>
    </div>
  `;
}

function showGreeting() {
  pageState.visits += 1;
  pageState.lastAction = 'Greeting shown';
  render();
}

button.addEventListener('click', showGreeting);
render();
