let init = (chapter) => {
    const
        ReaderController = new Reader(chapter),
        RenderView = new Render();

    let openPage = ReaderController.openPage();

    let
        chapterPages = ReaderController.getChapterPages,
        numberPages = ReaderController.getNumberPages;

    let optionsRender = RenderView.optionsPage(chapterPages, numberPages);

    const
        previousButton = document.querySelector('#previous'),
        nextButton = document.querySelector('#next'),
        optionsPage = document.querySelector('#optionsPage');

    const
        expandPage = document.querySelector('#expand'),
        chapterPage = document.querySelector('#chapterPage');

    expandPage.setAttribute('href', openPage.pageImgFile);
    chapterPage.setAttribute('src', openPage.pageImgFile);

    optionsPage.innerHTML = optionsRender;

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