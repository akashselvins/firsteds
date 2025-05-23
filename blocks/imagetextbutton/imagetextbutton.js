export default function decorate(block) {
  const rows = [...block.children];

  if (rows.length >= 1) {
    const imageRow = rows[0];
    imageRow.classList.add('image-row');

    if (rows.length >= 2) {
      const textRow = rows[1];
      const textContent = textRow.textContent.trim();
      if (textContent) {
        textRow.classList.add('text-overlay');
      } else {
        textRow.remove(); // Remove empty text row
      }
    }

    if (rows.length >= 3) {
      const buttonRow = rows[2];
      const buttonContent = buttonRow.textContent.trim();
      if (buttonContent) {
        buttonRow.classList.add('button-overlay');
      } else {
        buttonRow.remove(); // Remove empty button row
      }
    }
  }
}
