import fs from 'fs';

const input = ['A Y',
    'B X',
    'C Z'];

const ROCK_SCORE = 1;
const PAPER_SCORE = 2;
const SCISSORS_SCORE = 3;

const scoringPart1 = {
    'A': ROCK_SCORE,
    'B': PAPER_SCORE,
    'C': SCISSORS_SCORE,
    'X': ROCK_SCORE,
    'Y': PAPER_SCORE,
    'Z': SCISSORS_SCORE
};

const WIN = 6;
const DRAW = 3;

function resultLookupPart1(input) {
    switch (input) {
        case 'A X':
            return scoringPart1.X + DRAW;
        case 'A Y':
            return scoringPart1.Y + WIN;
        case 'A Z':
            return scoringPart1.Z;
        case 'B X':
            return scoringPart1.X;
        case 'B Y':
            return scoringPart1.Y + DRAW;
        case 'B Z':
            return scoringPart1.Z + WIN;
        case 'C X':
            return scoringPart1.X + WIN;
        case 'C Y':
            return scoringPart1.Y;
        case 'C Z':
            return scoringPart1.Z + DRAW;
    }
}

function resultLookupPart2(input) {
    switch (input) {
        case 'A X':
            return SCISSORS_SCORE;
        case 'A Y':
            return ROCK_SCORE + DRAW;
        case 'A Z':
            return PAPER_SCORE + WIN;
        case 'B X':
            return ROCK_SCORE;
        case 'B Y':
            return PAPER_SCORE + DRAW;
        case 'B Z':
            return SCISSORS_SCORE + WIN;
        case 'C X':
            return PAPER_SCORE;
        case 'C Y':
            return SCISSORS_SCORE + DRAW;
        case 'C Z':
            return ROCK_SCORE + WIN;
    }
}

function getScore(lines, callback) {
    return lines.reduce((acc, curr) => acc + callback(curr), 0);
}

const data = fs.readFileSync('input.txt', 'UTF-8')

const lines = data.split(/\r?\n/);



console.log(getScore(lines, resultLookupPart1));

console.log(getScore(lines, resultLookupPart2));