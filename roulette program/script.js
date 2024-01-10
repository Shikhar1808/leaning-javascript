// 1. Depoiste some money
// 2. Determine numberof lines to be bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Traspose the slot machine
// 6. Check if the user won 
// 7. Give the user their winnings
// 8. Play again

const prompt = require("prompt-sync")();

// Step 0 , here we have defined the number of columns,rows and symbols
const ROWS = 3;
const COLS = 3;
const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
};
const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
};

//Step 1
const deposite = () => { 
    while(true){
        const depoamt = prompt(`Enter a deposite amount: `);
        const numdepoamt = parseFloat(depoamt);
        if(isNaN(numdepoamt) || numdepoamt <= 0){
            console.log("Invalid deposite amount, try again");
        }
        else{
            return numdepoamt;
        }
    }
};

//Step 2
const getNumberOfLines = () =>{
    while(true){
        const lines = prompt(`Enter number of lines(1-3): `);
        const numOfLines = parseFloat(lines);
        if(isNaN(numOfLines) || numOfLines<= 0 || numOfLines> 3){
            console.log("Invalid number of lines, try again");
        }
        else{
            return numOfLines;
        }
    }
};

//Step 3
const getBet = (balance,Lines) => { 
    while(true){
        const bet = prompt(`Enter the amount of bet per line: `);
        const numBet = parseFloat(bet);
        if(isNaN(numBet) || numBet <= 0 || numBet > (balance/Lines)){
            console.log("Invalid Bet amount try again");
        }
        else{
            return numBet;
        }
    }
};

//Step 4
const spin = () => {
    const symbols = [];
    for(const [symbol,count] of Object.entries(SYMBOLS_COUNT)){
        
        for(let i =0; i < count; i++){
            symbols.push(symbol); 
        }
    }//generating an array with the all the available symbols from SYMBOLS_COUNT. 2- As, 3-Bs...

    const reels = []
    for(let i = 0; i < COLS; i++){
        reels.push([]) //it will push number of columns.
        const reelSymbols = [...symbols];
        for(let j = 0; j < ROWS; j++){
            const randomIndex = Math.floor(Math.random()* reelSymbols.length);
            const selectedsymbol = reelSymbols[randomIndex];
            reels[i].push(selectedsymbol);//It will push the selected symbol to the 
            reelSymbols.splice(randomIndex,1);
        }//this is done to randomly select a symbol from the symbols array and push in the jth row of the ith column.
    }

    return reels;
}; 

//Step 5
const transpose = (reels) => {
    const rows = [];
    for(let i = 0; i < ROWS; i++){
        rows.push([]);
        for(let j = 0; j < COLS; j++){
            rows[i].push(reels[j][i]);//reels[j][i] is used for accessing the ith positon element in the jth column of reels matrix
        }
    }
    
    return rows;
}//this is to convert the reels 1x3 matrix to a 3x3 matrix

const printRows = (transposed) => { 
    for(let row of transposed){
        let rowString = '';
        for(const [i,symbol] of row.entries()){ //const [i,symbol] signifies index and symbol at that index in any row of the transposed array or matrix.
            rowString += symbol;
            if(i != row.length -1){ //it is for A | B | C but we should not get the | at the end ex- A | B | C | like this.
                rowString += " | "; //at the last element there will pe no | next to it and it it is not the last symbol then there will a |next to it.
            }
        }
        console.log(rowString);
    }
}

//Step 6
const getWinnings = (transposed, bet, Lines) => { //it will take the rows, user's bet and and the number of lines the loser chose. If the user chose only one line then it will check the 1st(i.e index 0) row, if chose 2 then first 2(i.e index 0 and 1) rows and so on.
    let winnings = 0;
    for(let row = 0; row < Lines; row++){
        const symbols = transposed[row];
        let allSame = true; // if one of the symbol is not the same the row then it will become false.
        for(const symbol of symbols){
            if(symbol != symbols[0]){
                allSame = false;
                break;
            }
        }
        if(allSame){
            winnings += bet * SYMBOL_VALUES[symbols[0]];
        }
        

    }

    return winnings;
}


const game = () =>{ // Step 8 
    let balance = deposite(); // Step 1 

    while(true){
        console.log('You have a balance $' + balance);
        const numberOfLines = getNumberOfLines(); // Step 2
        const bet = getBet(balance,numberOfLines); // Step 3
        balance -= bet * numberOfLines;
        const reels = spin();//if we visualise it is an actual matrix that is in maths then the outpuy([[a a a],[b b b],[c c c]]) is like a single row matrix with 3 cloumns or 1x3 matrix but we want it as  3x3 matrix. So we have to traspose it
        // Step 4
        const transposed = transpose(reels); // Step 5
        // console.log(reels);
        // console.log(transposed);
        printRows(transposed);
        const winnings = getWinnings(transposed, bet , numberOfLines); // Step 6
        balance += winnings; // Step 7
        console.log("You Won, $" + winnings.toString());

        if(balance <= 0){
            console.log("You ran out of money");
            break;
        }
        const playagain = prompt("DO you want to play again (y/n)");
        if(playagain != "y"){
            break;
        }
    }
}
game();