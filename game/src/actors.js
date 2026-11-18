export const PLAYER_NAME='Jax';
export const contacts=['Ray'];
export function createWalker(x,z){return{x,z,health:100,alive:true};}
export function takeDamage(actor,n){actor.health=Math.max(0,actor.health-n);actor.alive=actor.health>0;return actor.alive;}
export function createActors(T,scene,material,random,count=24){const actors=[];for(let i=0;i<count;i++){const g=new T.Group(),body=new T.Mesh(new T.CapsuleGeometry(.35,.7,3,6),material([0xf4bc74,0x945d76,0x436d78,0xd9d4c5][i%4]));body.position.y=.7;g.add(body);g.position.set((random()-.5)*440,0,(random()-.5)*390);scene.add(g);actors.push(g)}return actors}
export function updateActors(actors,time,dt){for(let i=0;i<actors.length;i++)actors[i].position.x+=Math.sin(time*.4+i)*dt*.4}
