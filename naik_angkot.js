/* Diberikan function naikAngkot(listPenumpang) yang akan
menerima satu parameter berupa array dua dimensi. Function
akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan
membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output:
[
    { 
    penumpang: 'Dimitri',
    naikDari: 'B',
    tujuan: 'F',
    bayar: 8000 
    }
] 
*/

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var result = []
    for (var i = 0; i < arrPenumpang.length; i++) {
        var obj = {}
        obj.penumpang = arrPenumpang[i][0]
        obj.naikdari = arrPenumpang[i][1]
        obj.tujuan = arrPenumpang[i][2]
        var temp = 0
        var tarif = 2000
        for (var j = rute.indexOf(arrPenumpang[i][1]); j < rute.indexOf(arrPenumpang[i][2]); j++) {
            temp += tarif
        }
        obj.bayar = temp
        result.push(obj)
    }
    return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]