export const FLEET=['Cinder','Marlin','Cobalt','Sundial','Juniper','Vela','Atlas','Solace','Rook','Lumen'];
export function clampSpeed(v){return Math.max(-18,Math.min(36,v));}
export function createVehicles(T,scene,material,makeCar,random,count=16){const cars=[];for(let i=0;i<count;i++){const mesh=makeCar([0xc74b36,0x3c72a0,0xd8bb45,0xe5e1d6,0x58a06c][i%5]);mesh.position.set((random()-.5)*450,0,(random()-.5)*400);mesh.rotation.y=random()*6.28;cars.push({mesh,name:FLEET[i%FLEET.length],speed:0,traffic:i>=9,heading:mesh.rotation.y})}return cars}
export function updateTraffic(cars,dt){for(const c of cars)if(c.traffic){c.mesh.position.x+=Math.cos(c.heading)*dt*3;if(c.mesh.position.x>280)c.mesh.position.x=-280}}
