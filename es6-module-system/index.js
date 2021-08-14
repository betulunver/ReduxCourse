//modülden dılşarı çıkardığım default func'ı süslü parantez içerisine yazmadım.
//burada istediğim ismi yazabilirim. çünkü dil biliyor, atıyorum mehmet ahmet de yazabilirdim.
//Örn kareAl
import kareAl,{ topla ,cikar} from './myModule.js';

// As operatörü
//bu sayede yeniden isimlendirebiliyoruz.
//import kareAl, {topla as add, cikar as c} from './myModule.js';

//Çoklu fonksiyon içeren modüllerde as operatörü 
//import * as myModule from './myModule.js';
//kullanımı
// myModule.default(4);
// myModule.topla(4,5);

console.log(topla(3,5));
console.log(cikar(3,5));

console.log(kareAl(4));