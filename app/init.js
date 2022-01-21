let init = (chapterResponse) => {
    let controller = new Reader(chapterResponse);

    const $ = document.querySelector.bind(document);

    let openPage = controller.Chapter.openPage();

    $('#expand').setAttribute('href', openPage.pageImgFile);
    $('#imgFile').setAttribute('src', openPage.pageImgFile);

    $('#selectPages').innerHTML = controller.optionsTemplate;

    $('body')
        .addEventListener('keydown', (event) => {
            let key = event.keyCode;

            if (key == 37) {
                event.preventDefault();

                controller.previousPage();

                controller.selected($('#selectPages'), controller.Chapter.position);

                let openPage = controller.Chapter.openPage();

                $('#expand').setAttribute('href', openPage.pageImgFile);
                $('#imgFile').setAttribute('src', openPage.pageImgFile);

                window.scrollTo(0, 0);
            }

            if (key == 39) {
                event.preventDefault();
                
                controller.nextPage();

                controller.selected($('#selectPages'), controller.Chapter.position);

                let openPage = controller.Chapter.openPage();

                $('#expand').setAttribute('href', openPage.pageImgFile);
                $('#imgFile').setAttribute('src', openPage.pageImgFile);

                window.scrollTo(0, 0);
            }
        });

    $('#imgFile')
        .addEventListener('click', () => {
            controller.nextPage();

            controller.selected($('#selectPages'), controller.Chapter.position);

            let openPage = controller.Chapter.openPage();

            $('#expand').setAttribute('href', openPage.pageImgFile);
            $('#imgFile').setAttribute('src', openPage.pageImgFile);

            window.scrollTo(0, 0);
        });

    $('#selectPages')
        .addEventListener('change', () => {
            pageOption = $('#selectPages').value;

            controller.Chapter.position = pageOption;

            let openPage = controller.Chapter.openPage();

            $('#expand').setAttribute('href', openPage.pageImgFile);
            $('#imgFile').setAttribute('src', openPage.pageImgFile);

            window.scrollTo(0, 0);
        });

    $('#previous')
        .addEventListener('click', () => {
            controller.previousPage();

            controller.selected($('#selectPages'), controller.Chapter.position);

            let openPage = controller.Chapter.openPage();

            $('#expand').setAttribute('href', openPage.pageImgFile);
            $('#imgFile').setAttribute('src', openPage.pageImgFile);

            window.scrollTo(0, 0);
        });

    $('#next')
        .addEventListener('click', () => {
            controller.nextPage();

            controller.selected($('#selectPages'), controller.Chapter.position);

            let openPage = controller.Chapter.openPage();

            $('#expand').setAttribute('href', openPage.pageImgFile);
            $('#imgFile').setAttribute('src', openPage.pageImgFile);

            window.scrollTo(0, 0);
        });
}