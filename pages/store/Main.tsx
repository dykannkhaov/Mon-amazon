const products = [
  {
    desc: 'Macbook Pro édition 2020, 13 pouces',
    imgUrl: 'macbook-pro.png',
    price: '1449.00€',
    rate: 5,
  },
  {
    desc: 'Lot de 3 Cartes Pokémon 1ere Edition 1996',
    imgUrl: 'cartes-pokemon.png',
    price: '350.00€',
    rate: 4.5,
  },

  {
    desc: 'Casque Bose gris sans fil QuietComfort 35 II',
    imgUrl: 'casque-bose.jpeg',
    price: '299.99€',
    rate: 5,
  },

  {
    desc: 'Equipement pour Cocktail',
    imgUrl: 'cocktail-stuff.png',
    price: '19.99€',
    rate: 5,
  },

  {
    desc: 'Maillot de foot du PSG extérieur',
    imgUrl: 'maillot-psg.jpeg',
    price: '89.99€',
    rate: '5',
  },

  {
    desc: 'Iphone 13 Pro 128 Go, Bleu alpin',
    imgUrl: 'iphone13.png',
    price: '1159.00€',
    rate: 5,
  },

  {
    desc: 'Peluche Poro league of legends',
    imgUrl: 'poro.png',
    price: '18.99€',
    rate: 5,
  },

  {
    desc: 'Souris Logitech G903',
    imgUrl: 'souris-logitech.png',
    price: '121.90€',
    rate: 5,
  },

  {
    desc: 'Robot-Aspirateur, Roomba',
    imgUrl: 'roomba-aspirateur.png',
    price: '599.00€',
    rate: 5,
  },
  {
    desc: 'AirPods Pro',
    imgUrl: 'airpods-pro.png',
    price: '279.00€',
    rate: 5,
  },
  {
    desc: 'Nike Air Force 1 "07 bleu glacier',
    imgUrl: 'air-force1.png',
    price: '104.95€',
    rate: 5,
  },

  {
    desc: 'Sac Louis Vuitton',
    imgUrl: 'sac-lv.png',
    price: '1299.00€',
    rate: 5,
  },
]

export default function Main() {
  return (
    <>
      <div className="pt-4 pl-8">
        <h1 className="font-bold text-2xl mb-1">Notre sélection pour vous</h1>
        <hr className="border-gray-500"></hr>
      </div>

      <div className="flex flex-wrap pt-4 pl-8">
        {products.map((item, id) => (
          <ul key={id} className="flex flex-col border w-80 mb-3">
            <img src={`/${item.imgUrl}`} style={{ height: '250px', width: '250px' }} className="self-center" />
            <div className="pl-2 text-sm">
              <p className="font-bold">{item.desc}</p>
              <p>{item.rate}/5</p>
              <p>{item.price}</p>
            </div>
            <button className="bg-green-600 text-white text-sm mt-2 p-2 rounded self-center">Ajouter au panier</button>
          </ul>
        ))}
      </div>
    </>
  )
}
