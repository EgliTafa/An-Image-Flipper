function printImage() {
    var fileElem = document.querySelector("#fileElem").files[0];
    var reader = new FileReader();
    var image = document.querySelector('#gridPhoto');

    reader.onload = function(event) {
        image.innerHTML  = `
            <div class="col" id="gridPhoto">
                <div>
                    <img id="image" src="${event.target.result}" class="resize"/>
                </div>
            </div>`;

    };
    reader.readAsDataURL(fileElem); 
}

function resetToBlank(){
    window.location.reload();
}

function flipImage(){
    var fileElem = document.querySelector("#fileElem").files[0];
    var reader = new FileReader();
    var image = document.querySelector('#gridPhoto');

    reader.onload = function(event) {
        image.innerHTML  = `
            <div class="col imgFlip" id="gridPhoto">
                <div>
                    <img id="image" src="${event.target.result}" class="resize"/>
                </div>
            </div>`;

    };
    reader.readAsDataURL(fileElem); 
}

