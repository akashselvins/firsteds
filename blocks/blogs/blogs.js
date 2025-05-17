export default function decorate(block) {
    const rows = block.querySelectorAll(':scope > div');
  
    // Wrap each row in a container div
    rows.forEach((row) => {
      row.classList.add('row-container');
    });
  
    // Format the second row (BLOG POSTS)
    const blogPostsRow = rows[1];
    const blogColumns = blogPostsRow.querySelectorAll(':scope > div');
  
    blogColumns.forEach((col, index) => {
      if (index > 0) {
        const paragraphs = col.querySelectorAll('p');
        if (paragraphs.length > 0) {
          const firstPara = paragraphs[0];
          const img = firstPara.querySelector('img');
          if (img) {
            const text = firstPara.textContent.trim();
            const wrapper = document.createElement('div');
            wrapper.style.display = 'flex';
            wrapper.style.alignItems = 'center';
            wrapper.style.gap = '10px';
  
            wrapper.appendChild(img);
            const span = document.createElement('span');
            span.textContent = text;
            wrapper.appendChild(span);
  
            firstPara.innerHTML = '';
            firstPara.appendChild(wrapper);
          }
        }
      }
    });
  
    // Format the third row (POPULAR TAGS)
    const tagsRow = rows[2];
    const tagsColumn = tagsRow.querySelector(':scope > div:nth-child(2) p');
    if (tagsColumn) {
      const words = tagsColumn.textContent.trim().split(/\s+/);
      tagsColumn.innerHTML = '';
      words.forEach((word) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.display = 'inline-block';
        span.style.border = '1px solid #000';
        span.style.padding = '5px 10px';
        span.style.margin = '5px';
        span.style.backgroundColor = '#f0f0f0';
        tagsColumn.appendChild(span);
      });
    }
  }
  