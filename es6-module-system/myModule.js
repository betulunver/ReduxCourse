//eğer bu fonksiyonu dışarda bir yerde kullancaksak export dememmiz lazım. yoksa bu function'a erişemez
export const topla = (a, b) => {
    return a + b;
}
export const cikar = (a, b) => {
    return a - b;
}


//Default Function
//default keyword'ü varsayılan olarak module belirtmeyi sağlıyor.
//Örn bu dosya içerisinde birden fazla function var ama siz varsayılan bir function ataması yapabiliyorsunuz.
//kare alan bi func yazalım ve default belirttik.

//1.kullanım
export default (a) => {
    return a*a;
}

//2. kullanım
const kareAl=(a) => {
    return a*a;
}
export default kareAl;