let init = (chapter) => {
    const ReaderController = new Reader(chapter);

    const
        previousButton = document.querySelector('#previous'),
        nextButton = document.querySelector('#next');

    previousButton.addEventListener('click', () => {
        ReaderController.previousPage();

        console.log(ReaderController.openPage());
    });

    nextButton.addEventListener('click', () => {
        ReaderController.nextPage();

        console.log(ReaderController.openPage());
    });
}