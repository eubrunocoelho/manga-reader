let init = (chapter) => {
    const ReaderController = new Reader(chapter);
    const openPage = ReaderController.openPage();

    const
        previousButton = document.querySelector('#previous'),
        nextButton = document.querySelector('#next');

    const
        expandPage = document.querySelector('#expand'),
        chapterPage = document.querySelector('#chapterPage');

    expandPage.setAttribute('href', openPage.pageImgFile);
    chapterPage.setAttribute('src', openPage.pageImgFile);

    previousButton.addEventListener('click', () => {
        ReaderController.previousPage();

        let openPage = ReaderController.openPage();

        expandPage.setAttribute('href', openPage.pageImgFile);
        chapterPage.setAttribute('src', openPage.pageImgFile);
    });

    nextButton.addEventListener('click', () => {
        ReaderController.nextPage();

        let openPage = ReaderController.openPage();

        expandPage.setAttribute('href', openPage.pageImgFile);
        chapterPage.setAttribute('src', openPage.pageImgFile);
    });
}