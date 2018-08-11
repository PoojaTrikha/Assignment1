// Write your JS here

function rest(arg){
  arg.health =10;
  return arg;
}
rest(hero.health);


function pickUpItem(arg1, arg2){
 
return arg1.inventory.push(arg2);
 
}
pickUpItem(hero.inventory,hero.weapon)


function equipWeapon(arg3, arg4){
/*const testWeapon = { type: 'test', damage: 0 }
hero.inventory[0] = testWeapon
document.getElementById('bag').click()
expect(hero.weapon).to.equal(testWeapon)
if(hero){
  hero.inventory = [] }
*/
return arg3.inventory.pop(arg4);
}

equipWeapon(hero.inventory)