function updateConfidenceMeter(percentage) {
  const bar = document.getElementById('confidence-bar');
  const value = Math.max(0, Math.min(percentage, 100));
  bar.style.width = value + '%';
  bar.textContent = value + '%';

  if (value < 40) {
    bar.style.backgroundColor = '#dc3545';
  } else if (value < 70) {
    bar.style.backgroundColor = '#ffc107';
  } else {
    bar.style.backgroundColor = '#28a745';
  }
}
