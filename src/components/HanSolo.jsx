import React, { useState } from 'react';
import HanShotFirst from '../img/HanShotFirst.jpg'
import HanShotSecond from '../img/HanShotSecond.jpg'

function HanSolo() {
  const [didHanSoloShootFirst, setDidHanSoloShootFirst] = useState(true);
  const paragraphHanShotFirst = "In the original 1977 release of Star Wars Episode IV: A New Hope, the cantina scene shows Han Solo shooting Greedo, a bounty hunter, first. This scene has sparked controversy among fans, as it depicts Han Solo as a more ruthless and morally ambiguous character. Some fans argue that this version of the scene accurately reflects Han Solo's character, while others believe that it contradicts his later development as a hero.";
  const paragraphHanShotSecond = "The cantina scene in Star Wars Episode IV underwent changes in the 1997 re-release by George Lucas, including having Greedo shoot first and miss before Han Solo fires back. This version of the scene also generated controversy, with some fans arguing that it portrays Han Solo as less morally ambiguous and more of a traditional hero. Others believe that the change was unnecessary and that the original scene should have been left intact.";
  
  function toggleDidHanSoloShootFirst() {
    if(didHanSoloShootFirst === true) {
        setDidHanSoloShootFirst(false);
    } else if (didHanSoloShootFirst === false) {
        setDidHanSoloShootFirst(true);
    }
  }

  return (
    <div className='container'>
      <button onClick={toggleDidHanSoloShootFirst}>Toggle Shoot</button>  
      <h2>Did Han Solo shoot first? {didHanSoloShootFirst ? "Yes!" : "No!"}</h2>
      <img src={didHanSoloShootFirst ? HanShotFirst : HanShotSecond} />
      <p>{didHanSoloShootFirst ? paragraphHanShotFirst : paragraphHanShotSecond}</p>
    </div>
  );
}

export default HanSolo;