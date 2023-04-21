class Chapter {
    constructor(chapterURL) {
        this.chapterURL = chapterURL;
    }

    async getChapter() {
        const response = fetch(`${this.chapterURL}`).then((response) => {return response.json()});
        return response;
    }
}

export { Chapter };