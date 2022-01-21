class Reader {
    constructor(chapterResponse) {
        this.currentChapter = JSON.parse(chapterResponse);

        this.Chapter = new Chapter();
        this.Chapter.position = 0;
        this.Chapter.currentChapter = this.currentChapter.chapter;

        this.Options = new Options();
        this.optionsTemplate = this.Options.optionsTemplate(this.Chapter.currentChapter);
    }

    previousPage() {
        if (this.Chapter.position > 0) {
            return --this.Chapter.position;
        }
    }

    nextPage() {
        if (this.Chapter.position < (this.Chapter.currentChapter.length - 1)) {
            return ++this.Chapter.position;
        }
    }
}