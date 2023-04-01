import * as vb from './variables.js'


export const flexColumn = (gap=vb.pad200, align='start') => {
  return ` 
     display: flex;
     flex-direction: column;
     align-items: ${align};
     justify-content: center;
     gap: ${gap};
   `
 }

 export const flexRow = (gap=vb.pad200, justify='center') => {
    return `
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: ${justify};
      gap: ${gap};
    
    `
  }

export const iconSize = () => {
  return `
    width: $fs-400;
    height: $fs-400;
  `
}