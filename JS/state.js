/**
 * JS/state.js
 * Choice option button rendering, active state toggles, and answer templates check.
 */

/**
 * Renders multiple choice answer buttons dynamically.
 * Toggles active selection card highlights, locks clicks, and shows answer check marks.
 * @param {Array<string>} choices - Answer string options list
 * @param {string} correctAns - The correct answer value
 * @param {Function} selectCallback - Called when an option is selected
 */
function renderChoiceButtons(choices, correctAns, selectCallback) {
  const container = document.getElementById('choices-container');
  if (!container) return;

  container.innerHTML = '';

  choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = choice;

    btn.addEventListener('click', () => {
      // Toggle active option card styles highlight
      const activeBtn = container.querySelector('.choice-btn.active');
      if (activeBtn) activeBtn.classList.remove('active');
      btn.classList.add('active');

      // Check correctness of selection
      const isCorrect = choice === correctAns;

      // Lock click actions on all choice buttons
      const allButtons = container.querySelectorAll('.choice-btn');
      allButtons.forEach(b => b.disabled = true);

      // Display check marks / styles feedback
      if (isCorrect) {
        btn.classList.add('correct');
      } else {
        btn.classList.add('incorrect');
        // Find and highlight correct answer
        allButtons.forEach(b => {
          if (b.textContent === correctAns) {
            b.classList.add('correct');
          }
        });
      }

      // Fire callback after short visual delay
      setTimeout(() => {
        selectCallback(choice, isCorrect);
      }, 1000);
    });

    container.appendChild(btn);
  });
}

/**
 * Renders final performance tables and score statistics grids.
 * Maps response metrics, compute percentages, and displays results.
 * @param {Array<Object>} answers - Answer history logs
 * @param {Object} stats - Stats summary data object
 */
function renderResultsScreen(answers, stats) {
  const finalScore = document.getElementById('final-score');
  const finalPercentage = document.getElementById('final-percentage');
  const tableBody = document.querySelector('#performance-table tbody');

  if (finalScore) finalScore.textContent = `${stats.correct} / ${stats.total}`;
  if (finalPercentage) finalPercentage.textContent = `${stats.percentage}%`;

  if (tableBody) {
    tableBody.innerHTML = '';
    // Map response metrics to table rows
    answers.forEach((ans, index) => {
      const row = document.createElement('tr');
      
      const noCell = document.createElement('td');
      noCell.textContent = index + 1;
      
      const catCell = document.createElement('td');
      catCell.textContent = ans.category;
      
      const resCell = document.createElement('td');
      resCell.textContent = ans.isCorrect ? '✅ Correct' : '❌ Wrong';
      resCell.style.color = ans.isCorrect ? '#10b981' : '#ef4444';
      
      const timeCell = document.createElement('td');
      timeCell.textContent = `${ans.timeTaken}s`;

      row.appendChild(noCell);
      row.appendChild(catCell);
      row.appendChild(resCell);
      row.appendChild(timeCell);

      tableBody.appendChild(row);
    });
  }
}

