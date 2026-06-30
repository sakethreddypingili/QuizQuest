/**
 * JS/app.js
 * QuizQuest Welcome settings form validation and loader screens.
 */

// Welcome screen settings validation logic
document.addEventListener('DOMContentLoaded', () => {
  const settingsForm = document.getElementById('quiz-settings-form');
  const countInput = document.getElementById('question-count');
  const categorySelect = document.getElementById('question-category');
  const startBtn = document.getElementById('btn-start-quiz');

  if (settingsForm) {
    settingsForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const count = parseInt(countInput.value, 10);
      const category = categorySelect.value;

      // Verify count ranges
      if (isNaN(count) || count < 1 || count > 50) {
        alert('Please enter a valid count between 1 and 50.');
        return;
      }

      // Check select options validity
      if (category === undefined) {
        alert('Invalid category selection.');
        return;
      }

      // Start loaders or swap screens
      startBtn.textContent = 'Loading Challenge...';
      startBtn.disabled = true;

      // Initialize quiz workflow
      initQuizChallenge(count, category);
    });
  }
});

function initQuizChallenge(count, category) {
  console.log(`Starting challenge with ${count} questions in category: ${category}`);
  // Placeholders logic to be populated in next commits
}
