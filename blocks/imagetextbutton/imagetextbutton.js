export default function decorate(block) {
    const rows = [...block.children];
  
    if (rows.length >= 3) {
      const imageRow = rows[0];
      const textRow = rows[1];
      const buttonRow = rows[2];
  
      textRow.classList.add('text-overlay');
      buttonRow.classList.add('button-overlay');
    }
  }
  