export const MISSIONS=[['FIRST WHEELS',250],['PACKAGE RUN',400],['HEAT',500],['STREET WAR',600],['PAYDAY PICKUP',700],['THE BIG SCORE',5000]];
export const CASH_DROPS=[[-208,-156],[208,-52],[-52,208],[104,104],[-156,52]];
export function missionObjective(index,step,done=false){if(done)return 'STORY COMPLETE · Free roam';const next=[['Get behind the wheel.','Drive to Ray’s Garage.'],['Collect the parcel at the docks.','Deliver the package to the hotel.'],['Raise the heat to three stars.','Lose the police.'],['Head to Sun Plaza.','Eliminate all rivals.'],['Collect the hidden bundles.','All bundles collected.'],['Reach Solmar Bank.','Escape to the hideout.']];return `${MISSIONS[index][0]} · ${next[index][step?1:0]}`}
export function missionReward(index){return MISSIONS[index]?.[1]||0}
