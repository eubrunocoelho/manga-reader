let init = (chapter) => {
    const
        ReaderController = new Reader(chapter),
        RenderView = new Render();

    let
        chapterPages = ReaderController.getChapterPages,
        numberPages = ReaderController.getNumberPages,
        optionsRender = RenderView.optionsPage(chapterPages, numberPages);

    const
        body = document.querySelector('body'),
        previousButton = document.querySelector('#previous'),
        nextButton = document.querySelector('#next'),
        optionsPage = document.querySelector('#optionsPage');

    let
        expandPage = document.querySelector('#expand'),
        chapterPage = document.querySelector('#chapterPage');

    let openPage = ReaderController.openPage();

    const generateElements = {
        expandPage: expandPage,
        chapterPage: chapterPage
    };

    RenderView.openPage(generateElements, openPage);

    optionsPage.innerHTML = optionsRender;

    body.addEventListener('keydown', (e) => {
        let key = e.keyCode;

        if (key == 37) {
            e.preventDefault();
    
            ReaderController.previousPage();
            ReaderController.selectedPage(optionsPage, ReaderController.position);
    
            let openPage = ReaderController.openPage();
    
            RenderView.openPage(generateElements, openPage);
        }

        if (key == 39) {
            e.preventDefault();

            ReaderController.nextPage();
            ReaderController.selectedPage(optionsPage, ReaderController.position);

            let openPage = ReaderController.openPage();

            RenderView.openPage(generateElements, openPage);
        }
    });

    chapterPage.addEventListener('click', (e) => {
        e.preventDefault();

        ReaderController.nextPage();
        ReaderController.selectedPage(optionsPage, ReaderController.position);

        let openPage = ReaderController.openPage();

        RenderView.openPage(generateElements, openPage);
    });

    optionsPage.addEventListener('change', (e) => {
        e.preventDefault();

        let selectedPage = optionsPage.value;

        ReaderController.position = selectedPage;

        let openPage = ReaderController.openPage();

        RenderView.openPage(generateElements, openPage);
    });

    previousButton.addEventListener('click', (e) => {
        e.preventDefault();

        ReaderController.previousPage();
        ReaderController.selectedPage(optionsPage, ReaderController.position);

        let openPage = ReaderController.openPage();

        RenderView.openPage(generateElements, openPage);
    });

    nextButton.addEventListener('click', (e) => {
        e.preventDefault();

        ReaderController.nextPage();
        ReaderController.selectedPage(optionsPage, ReaderController.position);

        let openPage = ReaderController.openPage();

        RenderView.openPage(generateElements, openPage);
    });
}