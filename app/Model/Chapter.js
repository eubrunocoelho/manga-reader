class Chapter {
    constructor(chapterURL) {
        this.chapterURL = chapterURL;
    }

    async getChapter() {
        let state = {};

        const response = await fetch(`${chapterURL}`);
        state = await response.json();
        
        return state;
    }
}

export { Chapter };