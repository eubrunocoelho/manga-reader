class Reader {
    constructor(chapter) {
        this.currentChapter = chapter;
        this.chapterPages = chapter.pages;

        this.testing();
    }

    testing() {
        console.log(this.chapterPages);
    }
}