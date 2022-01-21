class Options {
    optionsTemplate(currentChapter) {
        let optionsTemplate = '';

        for (let i = 0; i < currentChapter.length; i++) {
            optionsTemplate += `
                <option value="${i}">${currentChapter[i].pageNumber}</option>
            `;
        }

        return optionsTemplate;
    }
}