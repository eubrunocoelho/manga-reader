class Render {
    optionsPage(chapterPages, numberPages) {
        let optionsPage = '';

        for (let i = 0; i < numberPages; i++) {
            optionsPage +=
                `<option value="${i}">${chapterPages[i].pageNumber}</option>`;
        }

        return optionsPage;
    }
}