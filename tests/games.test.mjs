import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {puzzleLevel,puzzleSolved,moveTile,waterLevel,waterSolved,pour} from '../demo/games.mjs';
import {deck} from '../demo/tarot.mjs';
test('12 water levels retain colors and a legal complete solution',()=>{
 for(let level=1;level<=12;level++)for(let sample=0;sample<40;sample++){
  const w=waterLevel(level),colors=2+Math.floor((level-1)/2),counts=w.bottles.flat().reduce((m,c)=>(m[c]=(m[c]||0)+1,m),{});
  assert.equal(Object.keys(counts).length,colors);assert.ok(Object.values(counts).every(n=>n===w.capacity));assert.ok(!waterSolved(w.bottles,w.capacity));
  for(const [a,b] of w.solution)assert.ok(pour(w.bottles,a,b,w.capacity));assert.ok(waterSolved(w.bottles,w.capacity));
 }
});
test('invalid pours leave the board unchanged',()=>{
 for(const [board,a,b] of [[[[0],[1]],0,1],[[[],[1]],0,1],[[[0],[0,0,0]],0,1],[[[0],[]],0,0]]){const before=structuredClone(board);assert.equal(pour(board,a,b,3),false);assert.deepEqual(board,before)}
});
test('12 puzzle levels produce solvable permutations',()=>{
 for(let level=1;level<=12;level++)for(let k=0;k<40;k++){
  const {size,board}=puzzleLevel(level),items=board.filter(Boolean);let inversions=0;
  for(let i=0;i<items.length;i++)for(let j=i+1;j<items.length;j++)if(items[i]>items[j])inversions++;
  assert.equal(new Set(board).size,size*size);assert.ok(!puzzleSolved(board));
  if(size%2)assert.equal(inversions%2,0);else assert.equal((inversions+size-Math.floor(board.indexOf(0)/size))%2,1);
 }
});
test('puzzle rejects row wrapping and recognizes a final move',()=>{
 const board=[1,2,3,4,5,6,7,0,8];assert.equal(moveTile(board,3,3),false);assert.equal(moveTile(board,8,3),true);assert.ok(puzzleSolved(board));
 assert.equal(moveTile([1,2,0,3,4,5,6,7,8],3,3),false);
});
test('78 unique cards have images and both readings',()=>{
 assert.equal(deck.length,78);assert.equal(new Set(deck.map(c=>c.image)).size,78);
 for(const card of deck){assert.ok(card.upright&&card.reversed);assert.ok(fs.existsSync(new URL('../demo/assets/tarot-rws/'+card.image,import.meta.url)))}
});
