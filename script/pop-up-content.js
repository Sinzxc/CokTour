const content1 = document.getElementById('aboutContent');
const content2 = document.getElementById('keyWords');
const content3 = document.getElementById('pop1');
const content4 = document.getElementById('pop2');
const content5 = document.getElementById('pop3');
function read() {
    const url = new URL(window.location.href);
    const doc = url.searchParams.get('docs');
    let file = '';
    file1 = 'script/info.md';
    file2 = 'script/keywords.md';
    file3 = 'script/1.md';
    file4 = 'script/2.md';
    file5 = 'script/3.md';
    if (file1 !== '') {
        fetch(file1)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content1.innerHTML = window.marked.marked(response);
            })
    }
    if (file2 !== '') {
        fetch(file2)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content2.innerHTML = window.marked.marked(response);
            })
    }
    if (file3 !== '') {
        fetch(file3)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content3.innerHTML = window.marked.marked(response);
            })
    }
    if (file4 !== '') {
        fetch(file4)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content4.innerHTML = window.marked.marked(response);
            })
    }
    if (file5 !== '') {
        fetch(file5)
            .then(response => {
                return response.text();
            })
            .then(response => {
                content5.innerHTML = window.marked.marked(response);
            })
    }
}
if (window.marked) {
    read();
}