class Reader {
    constructor(chapter) {
        this.chapterPages = chapter.pages;
        this.numberPages = chapter.pages.length;
        this.position = 0;
    }

    get getChapterPages() {
        return this.chapterPages;
    }

    get getNumberPages() {
        return this.numberPages;
    }

    set setPosition(position) {
        this.position = position;
    }

    get getPosition() {
        return this.position;
    }

    previousPage() {
        if (this.position > 0) {
            return --this.position;
        }
    }

    nextPage() {
        if (this.position < (this.numberPages - 1)) {
            return ++this.position;
        }
    }

    openPage() {
        return this.chapterPages[this.position];
    }

    selectedPage(element, pagePosition) {
        element.selectedIndex = pagePosition;
    }
}

export { Reader };