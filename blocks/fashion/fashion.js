export default function decorate(block) {
  block.classList.add('fashion-block');

  const rows = [...block.children];

  rows.forEach((row, index) => {
    row.classList.add(`fashion-row-${index + 1}`);

    const paragraphs = row.querySelectorAll('p');
    paragraphs.forEach((p) => {
      const text = p.textContent.trim();

      // Like button logic
      if (text.startsWith('Like')) {
        const countSpan = document.createElement('span');
        countSpan.className = 'like-count';
        countSpan.textContent = '0';

        p.textContent = 'Like (';
        p.appendChild(countSpan);
        p.append(')');

        p.style.cursor = 'pointer';
        p.addEventListener('click', () => {
          countSpan.textContent = parseInt(countSpan.textContent, 10) + 1;
        });
      }

      // Replies button logic
      if (text.startsWith('Replies')) {
        const countSpan = document.createElement('span');
        countSpan.className = 'reply-count';

        // Count how many reply rows follow this post (until next post with <h3>)
        let replyCount = 0;
        for (let i = index + 1; i < rows.length; i++) {
          const nextRow = rows[i];
          if (nextRow.querySelector('h3')) break;
          replyCount++;
        }

        countSpan.textContent = replyCount;
        p.textContent = 'Replies (';
        p.appendChild(countSpan);
        p.append(')');

        p.style.cursor = 'pointer';
        p.addEventListener('click', () => {
          for (let i = index + 1; i < rows.length; i++) {
            const nextRow = rows[i];
            if (nextRow.querySelector('h3')) break;
            nextRow.style.display = nextRow.style.display === 'none' ? 'block' : 'none';
          }
        });
      }
    });
  });
}
