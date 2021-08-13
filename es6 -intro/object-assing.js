
// objeler ve array'ler reference type çalışıyor.
const data ={name:"betül"};
const data2= data; //bu kısımda reference'ları eşitlemiş olduk aslında

data2.name='ahmet'; // o y]zden data@nin name artik ahmet yazacak/
console.log("data",data)

// bu durum olmasın diye Object.assing kullanağız.

const data2= Object.assign({}, data); // boş bir nesneye data'nın verilerini attık. bunun üzerinden değişiklik yapmış olacağız.

//iç içe objelerde

const data={
    info:{
        name: "betül",
        surname:"ünver"
    }
};
data2.info.name='ahmet'; //İç İçe objelerde Object assing çalışmıyor eski haline dönüyor yani data'da ahmet yazacak.
//o yüzden Json.parse kullancağız.
const data
const data2= JSON.parse(JSON.stringify(data));
data.info.name="ahmet";
console.log("data",data)
console.log("data2",data2)