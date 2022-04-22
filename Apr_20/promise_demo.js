function download(url) {
    return new Promise((resolve, reject) => {
        console.log("Started downloading from ", url);
        setTimeout(function() {
            console.log("Download done for the file image.jpg");
            resolve("image.jpg");
        }, 2000);
    });
}

function compress(filePath, callback) {
    // return new Promise((resolve, reject) => {

    // });
    // console.log("Started compressing the file ", filePath);
    // setTimeout(function() {
    //     console.log("Compression done for the file", filePath, "and saved it as image.zip");
    //     callback("https://uploader.com", "image.zip");
    // }, 4000);
}

function upload(url, file) {
    // return new Promise((resolve, reject) => {

    // });
    // console.log("Started uploading", file, "to", url);
    // setTimeout(function() {
    //     console.log("Successfully uploaded the file");
    // }, 3000)
}

///////////////////////
// download("https://downloader.com/image.jpg", function(file) {
//     compress(file, function(url, file) {
//         upload(url, file);
//     })
//     // console.log("hahahah")
// })


// let downloaded = download("https://downloader.com/image.jpg");
// downloaded.then(function(data) {
//     console.log("file downloaded is", data);
// })