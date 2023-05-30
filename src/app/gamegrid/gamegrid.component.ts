import { Component } from '@angular/core';
import { Input } from '@angular/core';

interface Cell {
  value: number;
  isFixed: boolean;
  isValid: boolean
}

@Component({
  selector: 'app-gamegrid',
  templateUrl: './gamegrid.component.html',
  styleUrls: ['./gamegrid.component.css']
})
export class GamegridComponent {

  puzzle: Cell[][];
  selectedDifficulty: string = 'beginner';

  constructor() {
    this.puzzle = this.initializePuzzle();
  }

  initializePuzzle(): Cell[][] {
    let puzzle: Cell[][];

    if(this.selectedDifficulty === 'beginner'){
      puzzle = [
        [{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false,isValid: true},{value: 3, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 2, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 6, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true}],
        [{value: 9, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 3, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 5, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 1, isFixed: true,isValid: true}],
        [{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 1, isFixed: true,isValid: true},{value: 8, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 6, isFixed: true,isValid: true},{value: 4, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true}],
        [{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 8, isFixed: true,isValid: true},{value: 1, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 2, isFixed: true,isValid: true},{value: 9, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true}],
        [{value: 7, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 8, isFixed: true,isValid: true}],
        [{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 6, isFixed: true,isValid: true},{value: 7, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 8, isFixed: true,isValid: true},{value: 2, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true}],
        [{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 2, isFixed: true,isValid: true},{value: 6, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 9, isFixed: true,isValid: true},{value: 5, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true}],
        [{value: 8, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 2, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 3, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 9, isFixed: true,isValid: true}],
        [{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 5, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 1, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 3, isFixed: true,isValid: true},{value: 0, isFixed: false,isValid: true},{value: 0, isFixed: false,isValid: true}]];
    }else if(this.selectedDifficulty == 'medium'){
      puzzle = [
        [{value: 0, isFixed: false, isValid: true},{value: 2, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 6, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 8, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true}],
        [{value: 5, isFixed: true, isValid: true},{value: 8, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 9, isFixed: true, isValid: true},{value: 7, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 1, isFixed: true, isValid: true}],
        [{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 4, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true}],
        [{value: 3, isFixed: true, isValid: true},{value: 7, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 5, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true}],
        [{value: 6, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 4, isFixed: true, isValid: true}],
        [{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 8, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 1, isFixed: true, isValid: true},{value: 3, isFixed: true, isValid: true}],
        [{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 2, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true}],
        [{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 9, isFixed: true, isValid: true},{value: 8, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 3, isFixed: true, isValid: true},{value: 6, isFixed: true, isValid: true}],
        [{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 3, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 6, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 9, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true}]
      ];
    }else{
      puzzle = [
        [{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 6, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 4, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true}],
        [{value: 7, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 3, isFixed: true, isValid: true},{value: 6, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true}],
        [{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 9, isFixed: true, isValid: true},{value: 1, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 8, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true}],
        [{value: 0, isFixed: false, isValid: true},{value: 5, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true}],
        [{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 1, isFixed: true, isValid: true},{value: 8, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 3, isFixed: true, isValid: true}],
        [{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 3, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 6, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 4, isFixed: true, isValid: true},{value: 5, isFixed: true, isValid: true}],
        [{value: 0, isFixed: false, isValid: true},{value: 4, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 2, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 6, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true}],
        [{value: 9, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 3, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true}],
        [{value: 0, isFixed: false, isValid: true},{value: 2, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 1, isFixed: true, isValid: true},{value: 0, isFixed: false, isValid: true},{value: 0, isFixed: false, isValid: true}]
      ];
    }
    

    return puzzle;
  }

  generatePuzzle(){
    this.puzzle = this.initializePuzzle();
  }


  
checkSolution(grid: Cell[][], row: number, col: number, value: number):any {

  if(value<1 || value>9){
    grid[row][col].isValid = false;
    return;
  }
 
  for (let c = 0; c < 9; c++) {
    if (c!=col && grid[row][c].value === value) {
      grid[row][col].isValid = false;
      return;
    }
  }

  for (let r = 0; r < 9; r++) {
    if (r!=row && grid[r][col].value === value) {
      grid[row][col].isValid = false;
      return;
    }
  }

  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let r = startRow; r < startRow + 3; r++) {
    for (let c = startCol; c < startCol + 3; c++) {
      if ((r!=row || c!=col) && grid[r][c].value === value) {
        grid[row][col].isValid = false;
        return;
      }
    }
  }

  grid[row][col].isValid = true;
}

  solve() {
    // Implement your logic to solve the Sudoku puzzle
  }


}
