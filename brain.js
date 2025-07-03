let turn = 'O';
let total_turn = 0;
 
let winner = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
let board_array = new Array(9).fill('E');
function checkwinner() {

    for (let [index0, index1, index2] of winner) {

        if (board_array[index0] != 'E' && board_array[index0] === board_array[index1] && board_array[index1] === board_array[index2]) {
            return 1;
        }
    }
    return 0;
}

//printing x or o
//event listener on parent
const board = document.querySelector('.board');

const printer = (event) => {


    // console.log(event.target.id);
    const element = event.target;

    //if board is empty
    if (board_array[element.id] === "E") {
        total_turn++;

        if (turn === 'O') {
            element.innerHTML = "O";

            document.getElementById('G').style.transform = 'scale(1.3)';
            document.getElementById('B').style.transform = 'scale(1)';


            board_array[element.id] = 'O';
            if (checkwinner()) {
                document.getElementById('winningMessage').innerHTML = "Winner is O";
                document.getElementById('G').style.transform = 'scale(1)';
            
                board.removeEventListener('click', printer);
                return;

            }
            turn = 'X';
           
        }
        else {
            element.innerHTML = 'X'
            document.getElementById('B').style.transform = 'scale(1.3)';
            document.getElementById('G').style.transform = 'scale(1)';
            board_array[element.id] = 'X';


            if (checkwinner()) {
                document.getElementById('winningMessage').innerHTML = "Winner is X";
                document.getElementById('G').style.transform = 'scale(1)';
            

                board.removeEventListener('click', printer);
                return;

            }

            turn = "O";
        }
        if (total_turn == 9) {
            document.getElementById('winningMessage').innerHTML = "Match is Draw";
        }
    }
};

board.addEventListener('click', printer);


const restart = document.getElementById('restartbutton');
restart.addEventListener('click', () => {

    const cell = document.getElementsByClassName('cell');
    Array.from(cell).forEach((value) => {
        value.innerHTML = "";
    })

    turn = "O";
    total_turn = 0;
    document.getElementById('G').style.transform = 'scale(1)';
    document.getElementById('B').style.transform = 'scale(1)';
    board_array = new Array(9).fill('E');
    document.getElementById('winningMessage').innerHTML = '';

    board.addEventListener('click', printer);

})