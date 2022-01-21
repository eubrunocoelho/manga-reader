let init = (chapterResponse) => {
    let controller = new Reader(chapterResponse);

    const $ = document.querySelector.bind(document);

    let openPage = controller.Chapter.openPage();

    $('#expand').setAttribute('href', openPage.pageImgFile);
    $('#imgFile').setAttribute('src', openPage.pageImgFile);

    $('#selectPages').innerHTML = controller.optionsTemplate;

    $('#selectPages')
        .addEventListener('change', () => {
            pageOption = $('#selectPages').value;

            controller.Chapter.position = pageOption;

            let openPage = controller.Chapter.openPage();
            
            $('#expand').setAttribute('href', openPage.pageImgFile);
            $('#imgFile').setAttribute('src', openPage.pageImgFile);
        });

    $('#previous')
        .addEventListener('click', () => {
            controller.previousPage();

            let openPage = controller.Chapter.openPage();

            $('#expand').setAttribute('href', openPage.pageImgFile);
            $('#imgFile').setAttribute('src', openPage.pageImgFile);
        });

    $('#next')
        .addEventListener('click', () => {
            controller.nextPage();
            let openPage = controller.Chapter.openPage();
            $('#expand').setAttribute('href', openPage.pageImgFile);
            $('#imgFile').setAttribute('src', openPage.pageImgFile);
        });
}