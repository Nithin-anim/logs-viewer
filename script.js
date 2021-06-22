const xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var res = JSON.parse(this.responseText);
        const table = document.getElementsByClassName('log-table')[0];
        table.style.width = '100%';
        res.forEach(data => {
            const { message, time } = data;
            const html = `<tr><td>${time}</td><td>${JSON.stringify(message)}</td></tr>`;
            table.insertAdjacentHTML('beforeend', html);
        });
    }
};
xmlhttp.open("GET", "vmaker_logs.json", true);
xmlhttp.send();


