import React from 'react'

//TODO   1.YÖNTEM BASİT OLAN 

// function Product(props) {

//     console.log(props);
//     return (
//         <div>

//             <div> ÜRÜN BİLGİLERİ</div>
//             <br />

//             <div>İsim : {props.productName}</div>

//             <br />
//             <div>Fiyat : {props.price} TL</div>
//         </div>
//     )
// }

// export default Product

//? ---------------------------------------------------------------------------------------------
//? ---------------------------------------------------------------------------------------------
//? ---------------------------------------------------------------------------------------------





//TODO  2.YÖNTEM DESTRUCTURİNG YÖNTEMİ İLE 

// function Product(props) {

//     const { productName, price } = props;  /// <Product productName="Ayakkabı" price={3200} />

//     console.log(props);

//     return (
//         <div>

//             <div> ÜRÜN BİLGİLERİ</div>
//             <br />

//             <div>İsim : {productName}</div>

//             <br />
//             <div>Fiyat : {price} TL</div>
//         </div>
//     )
// }

// export default Product

//? ---------------------------------------------------------------------------------------------
//? ---------------------------------------------------------------------------------------------
//? ---------------------------------------------------------------------------------------------





//TODO  3.YÖNTEM PROPSLA ALIRKEN DESTRUCTURİNG ETME   ( EN KULLANIŞLI OLANI )

function Product({ productName, price }) {  // props geçme

    console.log(productName, price);

    return (
        <div>

            <div> ÜRÜN BİLGİLERİ</div>
            <br />

            <div>İsim : {productName}</div>

            <br />
            <div>Fiyat : {price} TL</div>
        </div>
    )
}

export default Product













//TODO ---- ÖZET --------


//?  Üst bileşen: Veriyi gönderir

// function App() {
//   return (
//     <div>
//       <Kisi ad="Burkay" yas={25} />    //* PROPS U TANIMLA
//       <Kisi ad="Ayşe" yas={30} />
//     </div>
//   );
// }


//?  Alt bileşen: Props ile veri alır

// function Kisi({ ad, yas }) {             //* BURADA YAKALA
//   return <p>{ad} - {yas} yaşında</p>;
// }

