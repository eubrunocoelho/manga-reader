const xhr = new XMLHttpRequest();

xhr.open('GET', 'chapter.json');

xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            init(xhr.responseText);
        }
    }
}

xhr.send();