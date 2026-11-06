export function puzzleLevel(level=1){
  const size=level<5?3:level<9?4:5, count=size*size;
  let board=Array.from({length:count},(_,i)=>(i+1)%count),last=-1;
  const steps=8+level*15;
  for(let k=0;k<steps;k++){const z=board.indexOf(0),adj=[z-size,z+size,...(z%size?[z-1]:[]),...(z%size<size-1?[z+1]:[])].filter(i=>i>=0&&i<count&&i!==last);const x=adj[Math.floor(Math.random()*adj.length)];[board[z],board[x]]=[board[x],board[z]];last=z;}
  if(board.every((v,i)=>v===(i+1)%count))return puzzleLevel(level);
  return {size,board};
}
export const puzzleSolved=board=>board.every((v,i)=>v===(i+1)%board.length);
export function moveTile(board,index,size){const z=board.indexOf(0);if(Math.abs(Math.floor(index/size)-Math.floor(z/size))+Math.abs(index%size-z%size)!==1)return false;[board[z],board[index]]=[board[index],board[z]];return true;}
export function waterLevel(level=1){
  const colors=Math.min(7,2+Math.floor((level-1)/2)),capacity=level<4?3:4;
  const bottles=Array.from({length:colors},(_,c)=>Array(capacity).fill(c)).concat([[],[]]),solution=[];
  // Reverse legal single-layer pours from a solved board; reverse path is a proof of solvability.
  for(let k=0;k<20+level*12;k++){
    const candidates=[];
    for(let a=0;a<bottles.length;a++){const b=bottles[a];if(!b.length||(b.length>1&&b.at(-2)!==b.at(-1)))continue;for(let d=0;d<bottles.length;d++)if(a!==d&&bottles[d].length<capacity)candidates.push([a,d]);}
    if(!candidates.length)break;const [a,d]=candidates[Math.floor(Math.random()*candidates.length)];bottles[d].push(bottles[a].pop());solution.unshift([d,a]);
  }
  if(waterSolved(bottles,capacity))return waterLevel(level);
  return {bottles,capacity,solution};
}
export function pour(bottles,a,b,capacity){if(a===b||!bottles[a]?.length||!bottles[b]||bottles[b].length>=capacity)return false;const color=bottles[a].at(-1);if(bottles[b].length&&bottles[b].at(-1)!==color)return false;bottles[b].push(bottles[a].pop());return true;}
export const waterSolved=(bottles,capacity)=>bottles.every(b=>!b.length||(b.length===capacity&&b.every(c=>c===b[0])));
