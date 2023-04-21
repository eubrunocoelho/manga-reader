let init = (chapter) => {
    const
        ReaderController = new Reader(chapter),
        RenderView = new Render();

    let
        chapterPages = ReaderController.getChapterPages,
        numberPages = ReaderController.getNumberPages,
        optionsRender = RenderView.optionsPage(chapterPages, numberPages);

    const
        expandPage = document.querySelector('#expand'),
        previousButton = document.querySelector('#previous'),
        nextButton = document.querySelector('#next'),
        optionsPage = document.querySelector('#optionsPage'),
        chapterPage = document.querySelector('#chapterPage');

    let openPage = ReaderController.openPage();

    expandPage.setAttribute('href', openPage.pageImgFile);
    chapterPage.setAttribute('src', openPage.pageImgFile);

    optionsPage.innerHTML = optionsRender;

    chapterPage.addEventListener('click', (e) => {
        e.preventDefault();

        ReaderController.nextPage();
        ReaderController.selectedPage(optionsPage, ReaderController.position);

        let openPage = ReaderController.openPage();

        expandPage.setAttribute('href', openPage.pageImgFile);
        chapterPage.setAttribute('src', openPage.pageImgFile);
    });

    optionsPage.addEventListener('change', (e) => {
        e.preventDefault();

        let selectedPage = optionsPage.value;

        ReaderController.position = selectedPage;

        let openPage = ReaderController.openPage();

        expandPage.setAttribute('href', openPage.pageImgFile);
        chapterPage.setAttribute('src', openPage.pageImgFile);
    });

    previousButton.addEventListener('click', (e) => {
        e.preventDefault();

        ReaderController.previousPage();
        ReaderController.selectedPage(optionsPage, ReaderController.position);

        let openPage = ReaderController.openPage();

        expandPage.setAttribute('href', openPage.pageImgFile);
        chapterPage.setAttribute('src', openPage.pageImgFile);
    });

    nextButton.addEventListener('click', (e) => {
        e.preventDefault();

        ReaderController.nextPage();
        ReaderController.selectedPage(optionsPage, ReaderController.position);

        let openPage = ReaderController.openPage();

        expandPage.setAttribute('href', openPage.pageImgFile);
        chapterPage.setAttribute('src', openPage.pageImgFile);
    });
}