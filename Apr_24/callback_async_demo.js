// whatever functions we will write will not hamper the main js thread
// Write a dummy program that can download a file, then compress it and then upload it

function download(url, callback) {
    // somehow it will download the file from the given url
    console.log("Started downloading from ", url);
    setTimeout(function() {
        console.log("Download done for the file image.jpg");
        callback("image.jpg");
        // callback("image.jpg");
    }, 2000);
}

function compress(filePath, callback) {
    // somehow it will compress the file present on the file path
    console.log("Started compressing the file ", filePath);
    setTimeout(function() {
        console.log("Compression done for the file", filePath, "and saved it as image.zip");
        callback("https://uploader.com", "image.zip");
    }, 4000);
}

function upload(url, file) {
    // uploads the file on the given url
    console.log("Started uploading", file, "to", url);
    setTimeout(function() {
        console.log("Successfully uploaded the file");
    }, 3000)
}

///////////////////////
download("https://downloader.com/image.jpg", function(file) {
    compress(file, function(url, file) {
        upload(url, file);
    })
    // console.log("hahahah")
})
