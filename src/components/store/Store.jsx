import React, { useState } from "react"
import './store.css'
import './ventana-descrip.css'
import Reloj from '../../assets/reloj.png'
import Special from '../../assets/special.webp'
import Casio from '../../assets/casio.jpg'
import Jimmy from '../../assets/jimmy.avif'
import Madone from '../../assets/MadoneSRL.webp'
import Mac from '../../assets/mac.jpg'
import Racer from '../../assets/racer.jpg'
import Ram from '../../assets/ram.webp'
import Tissot from '../../assets/tissot.avif'
import Trek from '../../assets/trek.png'
import Trumph from '../../assets/trumph-bon.jpg'

import Cafetera from '../../assets/cafetera.webp'
import Casa from '../../assets/casa.jpg'
import Finca from '../../assets/finca.jpg'
import Casac from '../../assets/casa-campo.jpeg'
import Apar from '../../assets/apar.jpg'
import Apto from '../../assets/apto.jpg'
import Cascampo from '../../assets/cas-cam.jpeg'


const Store = ({handleAddToCart}) => {
  const [selectedProduct, setSelectedProduct] = useState(null)

  
const data = [
  {
    id: 1,
    image: Trumph,
    title: 'BONNEVILLE T100',
    price: 25000,
    description: 'CON UNA ELEGANTE EVOLUCIÓN, LA BONNEVILLE T100 2021 ES UN CLÁSICO QUE NUNCA PASA DE MODA Y QUE OFRECE UN MAYOR RENDIMIENTO, MEJORES ESPECIFICACIONES TÉCNICAS Y MUCHO MÁS ESTILO..',
    github: 'https://github.com/JhonFaverM/MEGAFLIX',
    demo: 'https://megaflix-xi.vercel.app/'
  },
  {
    id: 2,
    image: Trek,
    title: 'Trek Madone SRL9',
    price: 12500,
    description: 'La Madone SLR es la bicicleta de competición definitiva. Tras siete generaciones, es la bicicleta de competición para carretera más rápida que jamás hayamos fabricado, superando los límites de lo que es posible gracias a la nueva tecnología IsoFlow, a nuestro mejor y más ligero carbono, y a una aerodinámica sin precedentes.',
    github: 'https://github.com/JhonFaverM/MEGABANT',
    demo: 'https://megabant.vercel.app/'
  },
  {
    id: 3,
    image: Tissot,
    title: 'Tissot Gentleman',
    price: 2300,
    description: 'Tissot, marca Suiza desde 1853. Su lema "Innovadores por tradición". Los relojes tissot son la única marca en el mundo que combina artesanía de precisión Suiza y la innovación con calidad excepcional a un precio justo.',
    github: 'https://github.com/JhonFaverM/Encriptar-texto',
    demo: 'https://encriptar-texto.vercel.app/'
  },
  {
    id: 4,
    image: Ram,
    title: 'Dodge Ram 2500',
    price: 75000,
    description: 'Las Ram Truck posteriores al año 2009 corresponden al diseño catalogado como de cuarta generación. Las Dodge Ram han sido nombradas por la revista estadounidense Motor Trend como las mejores camionetas del año en tres distintas ocasiones; la segunda generación de Ram en 1994, la tercera generación Heavy Duty (HD) en el 2003 y la cuarta generación HD en el 2010.',
    github: 'https://github.com/JhonFaverM/Barberia',
    demo: 'https://barberia-ten.vercel.app/'
  },
  {
    id: 5,
    image: Racer,
    title: 'Monitor 16"',
    price: 550,
    description: 'Los productos de Razer son generalmente dirigidos a los jugadores. Estos incluyen PC portátiles, tabletas de juegos y periféricos de PC, incluyendo ratones, dispositivos de audio, teclados, alfombrillas de ratón y game-pads. Razer también ha lanzado un software VoIP llamado Razer Comms.',
    github: 'https://github.com/JhonFaverM/MEGAFLIX',
    demo: 'https://megaflix-xi.vercel.app/'
  },
  {
    id: 6,
    image: Mac,
    title: 'Monitor Mac 28"',
    price: 650,
    description: 'Pantalla Retina 5K Pantalla Retina 5K de 27 pulgadas (diagonal) Resolución de 5120 x 2880 a 218 pixeles por pulgada Brillo de 600 nits Compatible con 1.000 millones de colores Amplia gama de colores (P3) Tecnología True Tone Configurable con: Vidrio nanotexturizado',
    github: 'https://github.com/JhonFaverM/MEGABANT',
    demo: 'https://megabant.vercel.app/'
  },
  {
    id: 7,
    image: Reloj,
    title: 'Redmi Watch Lite 2',
    price: 85,
    description: 'Pantalla táctil HD de 1,55". Mayor relación pantalla-cuerpo, aumento del 10 % con respecto al modelo anterior de Mi Watch Lite. Mejor experiencia visual y de control táctil. Cambia libremente entre más de 100 pantallas de reloj. Varias combinaciones modernas para adaptarse a tu estado de ánimo y a tu outfit diario.',
    github: 'https://github.com/JhonFaverM/Encriptar-texto',
    demo: 'https://encriptar-texto.vercel.app/'
  },
  {
    id: 8,
    image: Madone,
    title: 'Trek Madone SRL9',
    price: 12500,
    description: 'La Madone SLR es la bicicleta de competición definitiva. Tras siete generaciones, es la bicicleta de competición para carretera más rápida que jamás hayamos fabricado, superando los límites de lo que es posible gracias a la nueva tecnología IsoFlow, a nuestro mejor y más ligero carbono, y a una aerodinámica sin precedentes.',
    github: 'https://github.com/JhonFaverM/Barberia',
    demo: 'https://barberia-ten.vercel.app/'
  },
  {
    id: 9,
    image: Jimmy,
    title: 'SUZUKI JIMNY GL MT',
    price: 20000,
    description: 'DESEMPEÑO OFF-ROAD El Suzuki Jimny fue construido con las cuatro claves que definen un verdadero vehículo off-road: Sistema 4x4, bajo chasis independiente tipo escalera, amplios ángulos de operación y altura al piso, suspensión de eje rígido ALL-GRIP® PRO® (4x4 real) Este sistema brinda el control total al conductor para controlar el desempeño del Suzuki Jimny en cada tipo de terreno. Puede modular fácilmente entre tracción 4x2, 4x4 y 4x4 más caja reductora.',
    github: 'https://github.com/JhonFaverM/MEGABANT',
    demo: 'https://megabant.vercel.app/'
  },
  {
    id: 10,
    image: Casio,
    title: 'Casio DW-5600 G-Shock',
    price: 350,
    description: 'El G-Shock es uno de los relojes más resistentes jamás fabricados. De hecho, es el reloj más resistente del mundo según el libro Guinness de los récords. En la prueba Guinness, el DW-5600 G-Shock más barato sobrevivió al ser atropellado por un camión como si no fuera nada y siguió funcionando.',
    github: 'https://github.com/JhonFaverM/Encriptar-texto',
    demo: 'https://encriptar-texto.vercel.app/'
  },
  {
    id: 11,
    image: Special,
    title: 'Specialized S-Works',
    price: 1350,
    description: 'S-Works es una subdivisión de Specialized que se creó en el año 1992, como la serie de productos de alta gama de Specialized . El nombre fue tomado en alusión a la división Skunk Works de la Lockheed Martin, que es famosa por el desarrollo de aviones militares para la Estados Unidos.',
    github: 'https://github.com/JhonFaverM/Barberia',
    demo: 'https://barberia-ten.vercel.app/'
  },
  {
    id: 12,
    image: Cafetera,
    title: 'Finca Armenia',
    price: 220000,
    description: 'Se vende finca cafetera en Quimbaya Quindío Ubicada entre la vía Quimbaya Filandia, a 1.5 km de la vía principal 32.000 palos de café aproximadamente 2.200 matas de plátano aproximadamente Área 11 cuadras Área construida: 250 m2 aproximadamente Cultivada en Café, plátano y 1 cuadra en pasto Quebrada por lindero Nacimiento de agua Topografía',
    github: 'https://github.com/JhonFaverM/Barberia',
    demo: 'https://barberia-ten.vercel.app/'
  },
  {
    id: 13,
    image: Casa,
    title: 'Casa en Melgar',
    price: 180000,
    description: 'Campo de golf de 9 hoyos par 3, las, piscinas comunales, vias internas y externas pavimentadas, capilla, restaurante, zona comercial.',
    github: 'https://github.com/JhonFaverM/MEGABANT',
    demo: 'https://megabant.vercel.app/'
  },
  {
    id: 14,
    image: Finca,
    title: 'Finca Cafetera en Pitalito',
    price: 150000,
    description: 'OPORTUNIDAD se vende finca paicol huila, a puerta cerrada, consta de 11 hectáreas más 4000 mts, casa campestre 120 mt2 construidos, 2 alcobas sala , cocina patio con horno de barro, 2 baños. Toda plana ,todos en potreros mombaza, 2 establos, corral.cuenta con maquinaría ,tractor segadora, hileradora ardo rastra y otros elementos, tiene sistema de riegos. VALOR 620 millones INFORMACION: Gestión Inmobiliaria Sonia Rodriguez 3134399106 Popayán',
    github: 'https://github.com/JhonFaverM/Encriptar-texto',
    demo: 'https://encriptar-texto.vercel.app/'
  },
  {
    id: 15,
    image: Casac,
    title: 'Casa Campestre',
    price: 75000,
    description: 'Confortable casa campestre, excelente estado, al interior patio jardín con senderos ecológicos, variedad arboles frutales , amplia zonas verdes, fuente decorativa, depósito, terraza techada con piso de granito y tablón rojo.  Consta de sala-comedor, cocina abierta con barra americana, estudio abierto, alcoba principal  con baño,  y dos alcobas con baño auxiliar, closets,  ventanales alrededor de toda la casa que la hacen fresca y luz al natural, Aire A.',
    github: 'https://github.com/JhonFaverM/Barberia',
    demo: 'https://barberia-ten.vercel.app/'
  },
  {
    id: 16,
    image: Apar,
    title: 'Apartamento en el Poblado',
    price: 350000,
    description: 'Apartamento de 290 mts2 con espacios muy amplios, parcialmente remodelado, puerta blindada 2 cuartos utiles 2 parquederos lineales donde pueden caber 4 carros, puntos fijos y asensor remodelados unidad completa, muy buenas vias de acceso cerca a zona 2 sur cerca a clinicas y supermecados.',
    github: 'https://github.com/JhonFaverM/MEGABANT',
    demo: 'https://megabant.vercel.app/'
  },
  {
    id: 17,
    image: Apto,
    title: 'Apartamento en La Colina',
    price: 195000,
    description: 'Apartamento en unidad cerrada sector las Lomas con salida hacia la Intermedia, a una cuadra de Isa y mall Interplaza. Rutas de transporte publico y una gran oferta de servicios complementarios. Piso en marmol, puerta de seguridad, dos niveles, sala y comedor independientes, estar de tv, 3 alcobas con baño en la principal, tina y jacuzzi. cocina integral amplia, alcoba de servicio, balcon y terraza de buen tamaño. Parqueaderos lineales cubiertos.',
    github: 'https://github.com/JhonFaverM/Encriptar-texto',
    demo: 'https://encriptar-texto.vercel.app/'
  },
  {
    id: 18,
    image: Cascampo,
    title: 'Casa en Chia',
    price: 155000,
    description: '¡No pierda la oportunidad de vivir en una hermosa casa en Encenillos de Sindamanoy Chía! Esta propiedad tiene 300 m² de área construida en un amplio lote de 700 m². Su diseño moderno ofrece amplios e iluminados espacios interiores perfectos para disfrutar con su familia y amigos. La casa cuenta con 3 habitaciones, cada una con su propio baño, lo que le brinda la privacidad y comodidad que busca en su hogar. La cocina integral es moderna y está equipada con electrodomésticos de alta calidad.',
    github: 'https://github.com/JhonFaverM/Barberia',
    demo: 'https://barberia-ten.vercel.app/'
  },
]

  const addToCart = (product) => {
    handleAddToCart(product);
  }

  const openModal = (product) => {
    setSelectedProduct(product)
  }

  const closeModal = () => {
    setSelectedProduct(null)
  }



  return (
    <section id='portafolio'>
        <div className='title'>
            <h1>TIENDA</h1>
        </div>
        <div className='container portfolio__container'>
        {
          data.map(({id, image, title, price, description})=> {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img className="imagen" src={image} alt='Megaflix'></img>
                </div>
                <h3>{title}</h3>
                <p>Precio: {price}</p>
                <div className='portfolio__item-cta'>
                  <button type="button" className="btn btn-success" 
                    onClick={() => addToCart({ id, title, price })}>Agregar al carrito
                  </button>
                  <button type="button" class="btn btn-primary" 
                    onClick={() => openModal({ id, image, title, description })}>Ver producto
                  </button>
                </div>
              </article>
            )
          })
        }
      </div>

      {selectedProduct && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' >&times;</span>
            <img src={selectedProduct.image} />
            <h2>{selectedProduct.title}</h2>
            <p>{selectedProduct.description}</p>
            <button type="button" className="btn btn-success" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Store
