var openedprojects = [];

function printarrow(x) {

    var showid = x + "-more";

    if (isopened(x)) {

        document.getElementById(showid).innerHTML = "&#x25BC;";

    } else {

        document.getElementById(showid).innerHTML = "&#x25B2;";

    }

}

function scroll(x) {

    var div = document.getElementById(x);

    if (isopened(x)) {

        div.scrollTop = 0;
        var index = openedprojects.indexOf(x);
        openedprojects.splice(index, 1);

    } else {

        div.scrollTop = div.scrollHeight;
        openedprojects.push(x);

    }

    printarrow(x);

}

function isopened(x) {

    if (openedprojects.indexOf(x) > -1) {

        return true;

    } else {

        return false;

    }

}
