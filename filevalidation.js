
$.fn.hasExtension = function(exts=false) {
    return exts ? (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test($(this).val()) : false;
}


const getMimetype = (signature) => {
    switch (signature) {
        case '89504E47':
            return 'image/png'
        case '47494638':
            return 'image/gif'
        case '25504446':
            return 'application/pdf'
        case 'FFD8FFDB':
        case 'FFD8FFE0':
        case 'FFD8FFE1':
            return 'image/jpeg'
        case '504B0304':
            return 'application/zip'
        case '7BA2020':
            return 'application/json'
        default:
            return 'Unknown filetype'
    }
}


function readFile(file, onLoadCallback) {
    // Reads the file
    var file = file, hex = null;
    const blob = file.slice(0, 4), filereader = new FileReader();
    filereader.onload = onLoadCallback;    
    filereader.readAsArrayBuffer(blob);
}


function getHeader(exts, evt) {
    // Checking the file signature
    var check_bytes = false, mtype = '';

    if (evt.target.readyState === FileReader.DONE) {
        const uint = new Uint8Array(evt.target.result);
        let bytes = [];
        uint.forEach((byte) => {
            bytes.push(byte.toString(16))
        })
        const hex = bytes.join('').toUpperCase();

        mime_type = getMimetype(hex)
        mtype = mime_type.split('/')

        if(mtype.length >= 2){
            for(var i=0; i<exts.length; i++) {
                if(exts[i].toLocaleLowerCase() === mtype[1].toLocaleLowerCase()) {
                    check_bytes = true;
                    break;
                }
            }
        }
    }

    return check_bytes;
}