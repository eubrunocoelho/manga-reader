import { Chapter } from './Model/Chapter.js';
import { Reader } from './Controller/Reader.js';
import { Render } from './View/Render.js';
import { elements } from './View/base.js';

const chapterReader = (URL) => {
    const chapter = new Chapter(URL);
    const currentChapter = chapter.getChapter();

    (() => {
        currentChapter.then((data) => { init(data) });
    })();

    let init = (chapter) => {
        const ReaderController = new Reader(chapter);
        const RenderView = new Render();

        let chapterPages = ReaderController.getChapterPages;
        let numberPages = ReaderController.getNumberPages;

        let optionsRender = RenderView.optionsPage(chapterPages, numberPages);

        let openPage = ReaderController.openPage();

        elements.optionsPage.innerHTML = optionsRender;
        
        RenderView.openPage(elements, openPage);

        elements.body.addEventListener('keydown', (e) => {
            let key = e.keyCode;

            if (key == 37) {
                e.preventDefault();

                elements.chapterPage.scrollIntoView();

                ReaderController.previousPage();
                ReaderController.selectedPage(optionsPage, ReaderController.getPosition);

                let openPage = ReaderController.openPage();

                RenderView.openPage(elements, openPage);
            }

            if (key == 39) {
                e.preventDefault();

                elements.chapterPage.scrollIntoView();

                ReaderController.nextPage();
                ReaderController.selectedPage(optionsPage, ReaderController.getPosition);

                let openPage = ReaderController.openPage();

                RenderView.openPage(elements, openPage);
            }
        });

        elements.optionsPage.addEventListener('change', (e) => {
            e.preventDefault();

            let selectedPage = elements.optionsPage.value;

            ReaderController.setPosition = selectedPage;

            let openPage = ReaderController.openPage();

            RenderView.openPage(elements, openPage);
        });

        elements.previousButton.addEventListener('click', (e) => {
            e.preventDefault();

            ReaderController.previousPage();
            ReaderController.selectedPage(elements.optionsPage, ReaderController.getPosition);

            let openPage = ReaderController.openPage();

            RenderView.openPage(elements, openPage);
        });

        elements.nextButton.addEventListener('click', (e) => {
            e.preventDefault();

            ReaderController.nextPage();
            ReaderController.selectedPage(elements.optionsPage, ReaderController.getPosition);

            let openPage = ReaderController.openPage();

            RenderView.openPage(elements, openPage);
        });

        elements.chapterPage.addEventListener('click', (e) => {
            e.preventDefault();

            elements.chapterPage.scrollIntoView();

            ReaderController.nextPage();
            ReaderController.selectedPage(elements.optionsPage, ReaderController.getPosition);

            let openPage = ReaderController.openPage();

            RenderView.openPage(elements, openPage);
        })
    }
}

chapterReader(chapterURL);