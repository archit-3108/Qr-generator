function generateQR(){
    var gapi = "https://chart.googleapis.com/chart?cht=qr&chs="
    var qrImg = document.getElementById("img");
    var qrData = document.getElementById("data").value;
    var qrSize = document.getElementById("size").value;
    var dwn = document.getElementById("dwn");
    
    if(qrSize == -1){
        alert('Enter a Size for the QR')
    }
    if(qrData !== "" && qrSize == "500"){
        qrImg.src = gapi + "500x500" + "&chl=" + qrData;
        dwn.href = gapi + "500x500" + "&chl=" + qrData;
    }
    else if(qrData !== "" && qrSize == "200"){
        qrImg.src = gapi + "200x200" + "&chl=" + qrData;
        dwn.href = gapi + "200x200" + "&chl=" + qrData;

    }
    else if(qrData !== "" && qrSize == "250"){
        qrImg.src = gapi + "250x250" + "&chl=" + qrData;
        dwn.href = gapi + "250x250" + "&chl=" + qrData;

    }
    else if(qrData !== "" && qrSize == "300"){
        qrImg.src = gapi + "300x300" + "&chl=" + qrData;
        dwn.href = gapi + "300x300" + "&chl=" + qrData;

    }
    else if(qrData !== "" && qrSize == "400"){
        qrImg.src = gapi + "400x400" + "&chl=" + qrData;
        dwn.href = gapi + "400x400" + "&chl=" + qrData;
        // window.print();
    }
    else {
        alert("Enter valid text!");
    }

    document.getElementById("msg").style.display = "block";
}

function downloadQr(){
    let clickDwn = document.getElementById("dwn");
    let imageDwn = document.getElementById("img");

    let imgPath = imageDwn.getAttribute('src');
    let fileName = imgPath.substring(imgPath.lastIndexOf('&')+1);

    saveAs(imgPath, fileName);
}