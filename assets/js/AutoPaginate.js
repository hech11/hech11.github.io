
function InitPaginate(ThumbnailImgs, ellipsisBreakNum = -1) {

    let result = "<span onclick=\"SetPaginateIndex(\'0\')\" class=\"page active\" id=\"page0\">1</span></a>";
    for (let i = 1; i < ThumbnailImgs.length; i++) {
        let paginateIndex = i + 1;

        if(i == ellipsisBreakNum)
        {
            result +="<span>&hellip;</span>";
        }

        result += "<span onclick=\"SetPaginateIndex(\'" + i.toString() + "\')\" class=\"page\" id=\"page" + i.toString() + "\">" + paginateIndex.toString() + "</span></a>";
    }

    document.getElementById("demo").outerHTML = result;
}


var pageCounter = 0;
function ResetClass() {

    for (let i = 0; i < ThumbnailImgs.length; i++) {
        document.getElementById("page" + i.toString()).className = "page";
    }
}

function ChangeClassTypes(index = 0) {
    let pageIndex = index;
    document.getElementById("page" + pageIndex.toString()).className = "page active";
}

function ReEnableBackForthButton(isBackButton) {
    if (isBackButton) {
        document.getElementById("backButtonSmall").className = "button small";
    }
    else {
        document.getElementById("nextButtonSmall").className = "button small";
    }
}
function DisableBackForthButton(isBackButton) {
    if (isBackButton) {
        document.getElementById("backButtonSmall").className = "button small disabled";
    }
    else {
        document.getElementById("nextButtonSmall").className = "button small disabled";
    }
}

function ChangeThumbnailDoc(index = 0) {
    document.querySelector('img[name="edit-save"]').src = ThumbnailImgs[index];
}

function SetPaginateIndex(index = 0) {

    ChangeThumbnailDoc(index);
    pageCounter = index;


    ChangeBackForthButtonCSS();

    ResetClass();
    ChangeClassTypes(index);

}

function ChangeBackForthButtonCSS() {
    if (pageCounter > 0) {
        ReEnableBackForthButton(true);
    }
    else {
        DisableBackForthButton(true);
    }

    if (pageCounter >= ThumbnailImgs.length - 1) {
        DisableBackForthButton(false);
    } else {
        ReEnableBackForthButton(false);
    }
}
function IncrementPageCounter(isPositiveIncrement) {
    if (isPositiveIncrement) {
        pageCounter++;
        if (pageCounter >= ThumbnailImgs.length - 1) {
            pageCounter = ThumbnailImgs.length - 1;
        }
    }
    else {
        pageCounter--;
        if (pageCounter <= 0) {
            pageCounter = 0;
        }
    }

    SetPaginateIndex(pageCounter);

}
