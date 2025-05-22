export default function decorate(block) {
    [...block.children].forEach((row) => {
        block.classList.add('samplekae-sample');

        const container = document.createElement('div');
        container.classList.add('ithu-main-container'); // ✅ Fixed: use classList.add instead of className()

        const columns = [...row.children];
        if (columns.length < 2) return;

        const imageColumn = columns[0];
        const textColumn = columns[1];

        const imageElement = imageColumn.querySelector('img'); // ✅ Fixed: querySelector, not queryselector
        if (imageElement) {
            imageElement.classList.add('image-oda-pudhu-class');
            container.appendChild(imageElement);
        }

        const textElement = textColumn.querySelector('h1, h2, h3, h4, h5, p'); // ✅ Fixed: querySelector
        if (textElement) {
            container.appendChild(textElement);
        }

        row.innerHTML = '';
        row.appendChild(container);
    });
}
