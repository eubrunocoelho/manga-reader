let init = (chapter) => {
    let ReaderController = new Reader(chapter);

    const
        previousButton = document.querySelector('#previous'),
        nextButton = document.querySelector('#next');

    previousButton.addEventListener('click', () => {
        console.log('previous');
    });

    nextButton.addEventListener('click', () => {
        console.log('next');
    });
}