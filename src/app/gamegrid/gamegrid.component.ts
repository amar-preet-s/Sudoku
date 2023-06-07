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

  bulbImageUrl = './assets/images/bulb.png';
  activeInput: number[] = [-1,-1];
  hints:number[] = [];
  puzzle: Cell[][];
  selectedDifficulty: string = 'beginner';
  cell: number[] = [-1,-1];
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


  
checkSolution(grid: Cell[][], row: number, col: number, value: number){
    grid[row][col].isValid = this.isValid(grid,row,col,value);
}

isValid(grid:Cell[][],row:number,col:number,value:number):boolean{
  if(value<1 || value>9){
    return false;
  }
 
  for (let c = 0; c < 9; c++) {
    if (c!=col && grid[row][c].value === value) {
      return false;
    }
  }

  for (let r = 0; r < 9; r++) {
    if (r!=row && grid[r][col].value === value) {
      return false;
    }
  }

  const startRow = Math.floor(row / 3) * 3;
  const startCol = Math.floor(col / 3) * 3;
  for (let r = startRow; r < startRow + 3; r++) {
    for (let c = startCol; c < startCol + 3; c++) {
      if ((r!=row || c!=col) && grid[r][c].value === value) {
        return false;
      }
    }
  }

  return true;
}



  solve(){

    const arrayList: number[] = [];
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(!this.puzzle[i][j].isFixed)
              arrayList.push(i*9+j);

        }
    }
    this.solveCells(0,9,9,arrayList);
  }

  solveCells(idx:number,n:number,m:number,l:number[]):boolean{
    if(idx == l.length){
      return true;
    }
    let r = Math.floor(l[idx]/n);
    let c = l[idx]%m;
    for(let num=1;num<=9;num++){
        if(this.isValid(this.puzzle,r,c, num)){
            this.puzzle[r][c].value = num;
            if(this.solveCells(idx+1,n, m,l)) return true;
            this.puzzle[r][c].value = 0;
        }
    }
    return false;
  }

  activateFloatingHint(i: number,j:number): void {
    this.activeInput[0] = i;
    this.activeInput[1] = j;
  }

  displayHints(row:number,col:number){
    this.hints = [];
    for(let i = 0;i<=9;i++){
      if(this.isValid(this.puzzle,row,col,i)){
        this.hints.push(i);
      }
    
    }

  }
}
