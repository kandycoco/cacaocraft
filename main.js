"use strict";

var mineField = [];

function loadMines(){
    for(var i=0; i<4; i++){
        var mineRow = [];
        for(var j=0; j<5; j++){
            if(Math.random()<.2){
                mineRow.push(true);
            }else{
                mineRow.push(false);   
            }
        }
        mineField.push(mineRow);
    }
}

loadMines();

function changeBlock(x,y){
    var id = 'block_' + x + y;
    var element = document.getElementById(id);
    if(mineField[y][x]){
        element.setAttribute('class', 'block mines');
        alert("LEL BARDTOX");
        window.location.reload();
    }else{
        element.setAttribute('class', 'block clicked');
    }
}

