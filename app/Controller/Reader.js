class Reader {
    constructor(chapter) {
        this.chapterPages = chapter.pages;
        this.numberPages = this.chapterPages.length;
        this.position = 0;
    }

    previousPage() {
        if (this.position > 0){
            return --this.position;}
    }

    nextPage() {
        if (this.position < (this.numberPages - 1)){
            return ++this.position;}
    }

    openPage() {
        return this.chapterPages[this.position];
    }
}