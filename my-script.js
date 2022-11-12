// loads the page at once 
window.onload = function(){
    let boardInput = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    
    
    let computerTurn = false; 
    
    class PlayerTurn{
        constructor(){}       

        userCellChoice(num) {
            switch(num){
                case 'one': document.getElementById(num).onclick = function(){
                        swithcFuncOne()
                    } 
                    break;
                case 'two': document.getElementById(num).onclick = function(){
                    swithcFuncTwo()
                     }
                     break;
                case 'three':document.getElementById("three").onclick = function(){
                    swithcFuncThree()
                     }
                    break;
                case 'four':document.getElementById("four").onclick = function(){
                    swithcFuncFour()
                    }
                    break;
                case 'five':document.getElementById("five").onclick = function(){
                    swithcFuncFive()
                    }
                    break;
                case 'six':document.getElementById("six").onclick = function(){
                    swithcFuncSix()
                    }
                    break;
                case 'seven':document.getElementById("seven").onclick = function(){
                    swithcFuncSeven()
                    }
                    break;
                case 'eight':document.getElementById("eight").onclick = function(){
                    swithcFuncEight()
                    }
                    break;
                case 'nine':document.getElementById("nine").onclick = function(){
                    swithcFuncNine()
                    }
                    break;
                                                
            }
            

        }  

    }
    
    let selectedCell = new PlayerTurn()
    selectedCell.userCellChoice("one")
    selectedCell.userCellChoice("two")
    selectedCell.userCellChoice("three")
    selectedCell.userCellChoice("four")
    selectedCell.userCellChoice("five")
    selectedCell.userCellChoice("six")
    selectedCell.userCellChoice("seven")
    selectedCell.userCellChoice("eight")
    selectedCell.userCellChoice("nine")
    

    function swithcFuncOne(){
        if(!computerTurn){
            computerTurn = true; 
            console.log("hello world")
            document.getElementById("one").innerHTML = 'x'
            boardInput[0][0] = 'x'
            console.log(boardInput)
            checkWinner(boardInput) 
            computerTurnCode('one') 
    
        }
    }
    function swithcFuncTwo(){
        if(!computerTurn){
            computerTurn = true; 
            console.log("hello world")
            document.getElementById("two").innerHTML = 'x'
            boardInput[0][1] = 'x'
            console.log(boardInput)
            checkWinner(boardInput)
            computerTurnCode('two') 
    
        }   
    }
    
    function swithcFuncThree(){
        if(!computerTurn){
            computerTurn = true; 
            console.log("hello world")
            document.getElementById("three").innerHTML = 'x'
            boardInput[0][2] = 'x'
            console.log(boardInput)
            checkWinner(boardInput)
            computerTurnCode('three')     
        }  
    }
    
    function swithcFuncFour(){
        if(!computerTurn){
            computerTurn = true; 
            console.log("hello world")
            document.getElementById("four").innerHTML = 'x'
            boardInput[1][0] = 'x'
            console.log(boardInput)
            checkWinner(boardInput)
            computerTurnCode('four')     }
    
        
    }
    function swithcFuncFive(){
        if(!computerTurn){
            computerTurn = true; 
            console.log("hello world")
            document.getElementById("five").innerHTML = 'x'
            boardInput[1][1] = 'x'
            console.log(boardInput)
            checkWinner(boardInput)
            computerTurnCode('five')     }
    
        
    }
    function swithcFuncSix(){
        if(!computerTurn){
            computerTurn = true; 
            console.log("hello world")
            document.getElementById("six").innerHTML = 'x'
            boardInput[1][2] = 'x'
            console.log(boardInput)
            checkWinner(boardInput)
            computerTurnCode('six')     }
    
        
    }
    function swithcFuncSeven(){
        if(!computerTurn){
            computerTurn = true; 
            console.log("hello world")
            document.getElementById("seven").innerHTML = 'x'
            boardInput[2][0] = 'x'
            console.log(boardInput)
            checkWinner(boardInput)
            computerTurnCode('seven')     }
    
        
    }
    function swithcFuncEight(){
        if(!computerTurn){
            computerTurn = true; 
            console.log("hello world")
            document.getElementById("eight").innerHTML = 'x'
            boardInput[2][1] = 'x'
            console.log(boardInput)
            checkWinner(boardInput)
            computerTurnCode('eight')     }
    
        
    }
    function swithcFuncNine(){
        if(!computerTurn){
            computerTurn = true; 
            console.log("hello world")
            document.getElementById("nine").innerHTML = 'x'
            boardInput[2][2] = 'x'
            console.log(boardInput)
            checkWinner(boardInput)
            computerTurnCode('nine')     }
    
        
    }
    
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min)
    }
    
    function computerTurnCode(num){
        timeOutInterval =  setTimeout(function(){
            computerTurn = false; 
            // getRandomInt(0, 9)
            console.log("computer turn");
            let cellArray = []
            for (let i=0; i<boardInput.length; i++){
                for(let j=0; j<boardInput[i].length; j++)
                    
                    if (boardInput[i][j] === ''){
                        if (i===0 && j===0){
                            let cellNum = 1
                            cellArray.push(cellNum)
                            console.log(cellNum)
                        }
                        if (i===0 && j===1){
                            let cellNum = 2
                            cellArray.push(cellNum)
                            console.log(cellNum)
                        }
                        if (i===0 && j===2){
                            let cellNum = 3
                            cellArray.push(cellNum)
                            console.log(cellNum)
                        }
                        if (i===1 && j===0){
                            let cellNum = 4
                            cellArray.push(cellNum)
                            console.log(cellNum)
                        }
                        if (i===1 && j===1){
                            let cellNum = 5
                            cellArray.push(cellNum)
                            console.log(cellNum)
                        }
                        if (i===1 && j===2){
                            let cellNum = 6
                            cellArray.push(cellNum)
                            console.log(cellNum)
                        }
                        if (i===2 && j===0){
                            let cellNum = 7
                            cellArray.push(cellNum)
                            
                        };
                        if (i===2 && j===1){
                            let cellNum = 8
                            cellArray.push(cellNum)
                            
                        };
                        if (i===2 && j===2){
                            let cellNum = 9
                            cellArray.push(cellNum)
                            
                        };
                        
                };
            };
    
            let randNum = getRandomInt(0, cellArray.length);
    
            if (cellArray[randNum] === 1){
                boardInput[0][0] = 'o'
                document.getElementById('one').innerHTML = 'o';
                checkWinner(boardInput)
            }
            if (cellArray[randNum] === 2){
                boardInput[0][1] = 'o'
                document.getElementById('two').innerHTML = 'o';
                checkWinner(boardInput)
            }
            if (cellArray[randNum] === 3){
                boardInput[0][2] = 'o'
                document.getElementById('three').innerHTML = 'o';
                checkWinner(boardInput)
            }
            if (cellArray[randNum] === 4){
                boardInput[1][0] = 'o'
                document.getElementById('four').innerHTML = 'o';
                checkWinner(boardInput)
            }
            if (cellArray[randNum] === 5){
                boardInput[1][1] = 'o'
                document.getElementById('five').innerHTML = 'o';
                checkWinner(boardInput)
            }
            if (cellArray[randNum] === 6){
                boardInput[1][2] = 'o'
                document.getElementById('six').innerHTML = 'o';
                checkWinner(boardInput)
            }
            if (cellArray[randNum] === 7){
                boardInput[2][0] = 'o'
                document.getElementById('seven').innerHTML = 'o';
                checkWinner(boardInput)
            }
            if (cellArray[randNum] === 8){
                boardInput[2][1] = 'o'
                document.getElementById('eight').innerHTML = 'o';
                checkWinner(boardInput)
            }
            if (cellArray[randNum] === 9){
                boardInput[2][2] = 'o'
                document.getElementById('nine').innerHTML = 'o';
                checkWinner(boardInput)
            }
    
            console.log("This is the Cell Array", cellArray)
    
            console.log("This is boardInput index", boardInput)}, 2000)
    
        
            
        }
    
    
    
    function checkWinner(checkInput){
        if ((checkInput[0][0] === 'x' && checkInput[0][1] === 'x' && checkInput[0][2] === 'x') || (checkInput[0][0] === 'x' && checkInput[1][1] === 'x' && checkInput[2][2] === 'x') || (checkInput[0][0] === 'x' && checkInput[1][0] === 'x' && checkInput[2][0] === 'x')|| (checkInput[0][1] === 'x' && checkInput[1][1] === 'x' && checkInput[2][1] === 'x')|| (checkInput[0][2] === 'x' && checkInput[1][2] === 'x' && checkInput[2][2] === 'x')|| (checkInput[1][0] === 'x' && checkInput[1][1] === 'x' && checkInput[1][2] === 'x')|| (checkInput[2][0] === 'x' && checkInput[2][1] === 'x' && checkInput[2][2] === 'x')|| (checkInput[0][2] === 'x' && checkInput[1][1] === 'x' && checkInput[2][0] === 'x')){
            document.getElementsByClassName("win-container")[0].style.display = "block"
            document.getElementById("hide-sub-row").style.display = "table-row"
        }
        // [0, 1, 2], [0, 3, 6],[0,4, 8], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8]
        if ((checkInput[0][0] === 'o' && checkInput[0][1] === 'o' && checkInput[0][2] === 'o') || (checkInput[0][0] === 'o' && checkInput[1][1] === 'o' && checkInput[2][2] === 'o') || (checkInput[0][0] === 'o' && checkInput[1][0] === 'o' && checkInput[2][0] === 'o')|| (checkInput[0][1] === 'o' && checkInput[1][1] === 'o' && checkInput[2][1] === 'o')|| (checkInput[0][2] === 'o' && checkInput[1][2] === 'o' && checkInput[2][2] === 'o')|| (checkInput[1][0] === 'o' && checkInput[1][1] === 'o' && checkInput[1][2] === 'o')|| (checkInput[2][0] === 'o' && checkInput[2][1] === 'o' && checkInput[2][2] === 'o')|| (checkInput[0][2] === 'o' && checkInput[1][1] === 'o' && checkInput[2][0] === 'o')){
            document.getElementsByClassName("lose-container")[0].style.display = "block"
            document.getElementById("hide-sub-row").style.display = "table-row"
    
        }
    }
    
    function changeColorOfSelectedCell(id_num){
        const button = document.getElementById(id_num);
        button.addEventListener('click', btnclick); 
        function btnclick() {
        button.style.backgroundColor = '#ffa733e0';
}
    }
    changeColorOfSelectedCell('one')
    changeColorOfSelectedCell('two')
    changeColorOfSelectedCell('three')
    changeColorOfSelectedCell('four')
    changeColorOfSelectedCell('five')
    changeColorOfSelectedCell('six')
    changeColorOfSelectedCell('seven')
    changeColorOfSelectedCell('eight')
    changeColorOfSelectedCell('nine')

  
}
    
    
    