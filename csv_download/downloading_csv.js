$.ajax({
    url: urlString,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    cache: false,
    success: function(data) {
        if (data) {
            var iframe = $("<iframe/>").attr({
                src: data,
                style: "visibility:hidden;display:none"
            }).appendTo(buttonToDownloadFile);
        } else {
            alert('Something went wrong');
        }
    }
});