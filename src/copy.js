document.addEventListener('DOMContentLoaded', function () {
    const copyItems = document.querySelectorAll('.copy-item');

    copyItems.forEach(item => {
        item.addEventListener('click', function () {
            const textToCopy = this.getAttribute('data-copy');
            const tooltip = this.querySelector('.copy-tooltip');

            const tempInput = document.createElement('input');
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            tooltip.textContent = 'Copied!';

            this.classList.add('copied');

            setTimeout(() => {
                tooltip.textContent = 'Click to copy';
                this.classList.remove('copied');
            }, 2000);
        });
    });
});