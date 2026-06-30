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

/**
 * Answer history structures tracking player options choices.
 * Logs response metrics, right/wrong splits, and times elapsed.
 */
class QuizTracker {
  constructor() {
    // Memory structures for tracking player decisions
    this.answers = []; 
    this.startTime = null;
  }

  startQuestionTimer() {
    this.startTime = Date.now();
  }

  /**
   * Log an answer event.
   * @param {string} question - Question title text
   * @param {string} category - Question category
   * @param {string} selected - Chosen option text
   * @param {boolean} isCorrect - Right/wrong splits
   */
  recordAnswer(question, category, selected, isCorrect) {
    const elapsed = this.startTime ? (Date.now() - this.startTime) / 1000 : 0;
    this.answers.push({
      question,
      category: category || 'General',
      selected,
      isCorrect,
      timeTaken: Math.round(elapsed * 10) / 10 // rounded decimal
    });
  }

  getStatsSummary() {
    const total = this.answers.length;
    const correctCount = this.answers.filter(a => a.isCorrect).length;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    return {
      total,
      correct: correctCount,
      incorrect: total - correctCount,
      percentage
    };
  }
}

