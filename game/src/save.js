export const KEY='solmar-save-v1';
export function readSave(){try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch{return null}}
export function writeSave(value){try{localStorage.setItem(KEY,JSON.stringify(value));return true}catch{return false}}
export function eraseSave(){try{localStorage.removeItem(KEY)}catch{}}
export function hasSave(){return !!readSave()}
export function restoreState(game){const d=readSave();if(!d)return false;game.cash=d.cash||0;game.index=Math.min(5,d.missionIndex||0);game.done=!!d.storyDone||d.missionIndex>=6;game.completed=d.completedMissions||0;game.player={x:d.pos?.x||0,z:d.pos?.z||104};return true}
