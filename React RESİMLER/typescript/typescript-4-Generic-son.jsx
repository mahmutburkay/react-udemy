// ------------------  Generic Tipler <T> --------------------------

function yazdir(array: string[] | number[]) {
    console.log(array);
}

yazdir(["enes", "ali", "veli"])
yazdir([1, 2, 3, 4, 5])
yazdir([true, false])  // Array boolean olamadığı için hata verir. 
yazdir([])



// Generic Örnek 1 

function yazdir<T>(array: T[]): void {
    console.log(array);
}

yazdir(["enes", "ali", "veli"])
yazdir([1, 2, 3, 4, 5])
yazdir([true, false])


//------------------------------------------------------------------------


//// Generic Örnek 2

interface GenericType<T> {
    name: string,
    age: number,
    salary: T[]  // maaş string mi number mı bilmiyoruz o yüzden generic yaptık.
}


const obj1: GenericType<string> = {
    name: "enes",
    age: 25,
    salary: ["5000", "10000", "15000"]
}


const obj2: GenericType<number> = {
    name: "mahmut",
    age: 24,
    salary: [5000, 10000, 15000]
}



let array: GenericType<string | number>[] = [obj1, obj2];


function write<T>(array: GenericType<T>[]): void {

    array.forEach((value: GenericType<T>) => console.log(value))
}


write(array);



//------------------------------------------------------------------------





//// Extends -- Miras Alma 


interface OrtakAlanlar {

    id: string,
    olusturmaTarihi: string,
    olusturankisi: string,

}



interface Musteri extends OrtakAlanlar {

    musteriNo: string
}


interface Kurum extends OrtakAlanlar {

    kurumNo: string,
}


const kurum: Kurum = {
    id: "1",
    olusturmaTarihi: "09.06.2024",
    olusturankisi: "Enes",

    kurumNo: "23123"

}

console.log(kurum)



//------------------------------------------------------------------------


//Partial , Reguired , ReadOnly , pick , omit

//Partial : optional yapar.
//Required : her şeyi doldurmak zorunda bırakır "?" olsada.
//ReadOnly : sadece okunabilir yapar, değiştirilemez
//Pick : sadece belirttiğimiz değişkeni almak için kullanılır.
//Omit : belirttiğimiz tipin dışındakileri al, pick'in tam tersi 





// Partial : içerideki tanımlanmış olan her şeyin başına ? tanımlanmış gibi,
// opsiyonel yapar, yani istediğini kullan istediğini kullanma

interface User {
    name: string,
    age: number
    lastname: string,
    tckn: string,
    birthdate: string
}

const user: Partial<User> = {
    name: "enes",

}

console.log(user)


//-----------------------------------------------------------

// Required: opsiyonel olsa bile (?) setlenmesi zorunlu 

interface User1 {
    name?: string,
    age?: number
}


const user1: Required<User1> = {
    name: "enes",
    age: 25
}




//-----------------------------------------------------------

// ReadOnly : sadece okunabilir, değiştirilemez. 

interface User2 {
    name?: string,
    age?: number
    lastname?: string,
    tckn?: string,
    birthdate?: string
}

const user2: Readonly<User2> = {
    name: "enes",
}

// user2.name > "ali"  // değiştirilemez

console.log(user2.name)



//----------------------------------------------------------------

// Pick : sadece o değişken varmış gibi, diğerlerini yok sayar

interface User3 {
    name?: string,
    age: number
    lastname: string,
    tckn: string,
    birthdate: string
}

const user3: Pick<User3, "name"> = {
    name: "enes",  // diğerleri zorunlu olmasına rağmen kullanmasan da olur
}


//----------------------------------------------------------------

// Omit : işaretlediğim değişken dışındakileri al, pick in tersi 

interface User4 {
    name?: string,
    age: number
    lastname: string,
    tckn: string,
    birthdate: string
}

const user4: Omit<User4, "name"> = {
    age: 25,  // name dışındaki değişkenleri al 
    lastname: "bayram",
    tckn: "231231",
    birthdate: "123123"
}



