import { TYPES } from "./ShopingActions";
import Baterias from "../Cart/Image/Baterias.png"
import Busbar from "../Cart/Image/Busbar.png"
import Condensadores from "../Cart/Image/Condensadores.png"
import Conectores from "../Cart/Image/Conectores.png"
import Contactores from "../Cart/Image/Contactores.png"
import Disipadores from "../Cart/Image/Disipadores.png"
import FuenteAlimentacion from "../Cart/Image/Fuente Alimentacion.png"
import Fusibles from "../Cart/Image/Fusibles.png"
import Interruptores from "../Cart/Image/Interruptores.png"
import ModuloPotencia from "../Cart/Image/Modulo Potencia.png"
import ProteccionTension from "../Cart/Image/Proteccion Sobretension.png"
import Reles from "../Cart/Image/Reles.png"
import Resistencias from "../Cart/Image/Resistencias.png"
import SensoresHall from "../Cart/Image/Sensores Hall.png"
import Ultracaps from "../Cart/Image/Ultracaps.png"
import Drivers from "../Cart/Image/Drivers Led.png"
import Leds from "../Cart/Image/Leds.png"
import OpticasLed from "../Cart/Image/Opticas Leds.png"
import Aerosoles from "../Cart/Image/Aerosoles.png"
import Baterias1 from "../Cart/Image/Baterias1.png"
import Busbar1 from "../Cart/Image/Busbar1.jpg"
import Condensadores1 from "../Cart/Image/Condensadores1.jpg"
import Conectores1 from "../Cart/Image/Conectores1.jpg"
import Contactores1 from "../Cart/Image/Contactores1.jpg"
import Disipadores1 from "../Cart/Image/Disipadores1.jpg"
import FuenteAlimentacion1 from "../Cart/Image/Fuente Alimentacion1.jpg"
import Fusibles1 from "../Cart/Image/Fusibles1.jpg"
import Interruptores1 from "../Cart/Image/Interruptores1.jpg"
import ModuloPotencia1 from "../Cart/Image/Modulo Potencia1.jpg"
import ProteccionTension1 from "../Cart/Image/Proteccion Sobretension1.jpg"
import Reles1 from "../Cart/Image/Reles1.jpg"
import Resistencias1 from "../Cart/Image/Resistencias1.jpg"
import SensoresHall1 from "../Cart/Image/Sensores Hall1.jpg"
import Termostatos from "../Cart/Image/Termostatos.jpg"
import Transformadores from "../Cart/Image/Transformadores Planares.jpg"
import Ultracaps1 from "../Cart/Image/Ultracaps1.jpg"
import Ventiladores from "../Cart/Image/Ventiladores.jpg"

export const shoppingInitialState = {
  products: [
    {
      id: 1,
      image: Baterias,
      title: "Baterias",
      price: 4500,
      description:
        "El almacenamiento de energía eléctrica es el componente decisivo para una integración total de las energías renovables en nuestro día a día. Las gama de baterías está destinada tanto a aplicaciones de movilidad industrial como de soporte de red: respuesta en frecuencia, control de rampa, etc.",
    },
    {
      id: 2,
      image: Busbar,
      title: "Busbar",
      price: 4500,
      description:
        "Distribuyen energía de alta corriente local y se utilizan para conectar equipos de alto voltaje en los patios eléctricos y equipos de bajo voltaje en los bancos de baterías.",
    },
    {
      id: 3,
      image: Condensadores,
      title: "Condensadores",
      price: 4500,
      description:
        "Los condensadores están diseñados para ofrecer un rendimiento consistente en aplicaciones de seguridad bajo condiciones ambientales adversas a la vez que satisfacen las necesidades en los entornos industriales.",
    },
    {
      id: 4,
      image: Conectores,
      title: "Conectores",
      price: 4500,
      description:
        "Los conectores permiten la instalación sencilla, rápida y fiable de máquinas e instalaciones industriales. Sus carcasas protegen contra movimiento mecánico y previenen la entrada de chorros de agua o polvo",
    },
    {
      id: 5,
      image: Contactores,
      title: "Contactores",
      price: 4500,
      description:
        "Los contactores tienen la capacidad de abrir y cerrar circuitos en carga. Permiten automatizar fácilmente el arranque y paro de motores y posibilitan el control de una maquina desde varios puntos o estaciones de maniobra.",
    },
    {
      id: 6,
      image: Disipadores,
      title: "Disipadores",
      price: 4500,
      description:
        "Actualmente los requerimientos de disipación en espacios reducidos aumentan y mediante los radiadores se consiguen valores realmente buenos.",
    },
    {
      id: 7,
      image: FuenteAlimentacion,
      title: "Fuentes de Alimentacion",
      price: 4500,
      description:
        "Actualmente los requerimientos de disipación en espacios reducidos aumentan y mediante los radiadores se consiguen valores realmente buenos.",
    },
    {
      id: 8,
      image: Fusibles,
      title: "Fusibles",
      price: 4500,
      description:
        "Componentes de seguridad utilizados para prevenir daños por exceso de corriente eléctrica en un circuito eléctrico, o para la protección general de equipos eléctricos o electrónicos y redes eléctricas",
    },
    {
      id: 9,
      image: Interruptores,
      title: "Interruptores",
      price: 4500,
      description:
        "Las ópticas led se centra en el diseño y construcción de espejos, lentes y diversos elementos que protegen y ayudan a controlar y dirigir la luz pudiendo ampliar o reducir el haz de luz proyectada.",
    },
    {
      id: 10,
      image: ModuloPotencia,
      title: "Modulo de Potencia",
      price: 4500,
      description:
        "Los dispositivos de control de potencia ayudan a controlar el flujo de energía que se transfiere a la carga. Nos entregan alta eficiencia y variando el ciclo de trabajo del dispositivo de control se puede regular el voltaje de salida",
    },
    {
      id: 11,
      image: ProteccionTension,
      title: "Proteccion Sobretension",
      price: 4500,
      description:
        "Los dispositivos ProTec están especialmente indicados en la protección ante sobretensiones y descargas producidas por impactos indirectos de rayos en la parte de continua de sistemas de alimentación AC/DC, instalaciones fotovoltaicas, turbinas eólicas y equipos industriales.",
    },
    {
      id: 12,
      image: Reles,
      title: "Reles",
      price: 4500,
      description:
        "Los Relés o relevadores, permiten desarrollar una conmutación a distancia, controlando altas tensiones con un bajo voltaje en retorno. También sirven para interrumpir la alimentación de corriente alterna.",
    },
    {
      id: 13,
      image: Resistencias,
      title: "Resistencias",
      price: 4500,
      description:
        "Se usan en aplicaciones donde se requiere disipar una gran potencia.",
    },
    {
      id: 14,
      image: SensoresHall,
      title: "Sensores Efecto Hall",
      price: 4500,
      description:
        "Los sensores de efecto Hall se han convertido en una pieza fundamental en el desarrollo de proyectos de automatización y diseño de dispositivos electrónicos portátiles",
    },
    {
      id: 15,
      image: Ultracaps,
      title: "Ultracaps",
      price: 4500,
      description:
        "Los ultracapacitores son capaces de almacenar y descargar energía de manera muy rápida y eficaz. Debido a sus muchos beneficios, los ultracapacitores se están utilizando actualmente en miles de aplicaciones diferentes.",
    },
    {
      id: 16,
      image: Drivers,
      title: "Drivers",
      price: 4500,
      description:
        "El funcionamiento y la duración de una luminaria LED depende en gran medida del driver que estabiliza la corriente y proporciona protección térmica.",
    },
    {
      id: 17,
      image: Leds,
      title: "Leds",
      price: 4500,
      description:
        "Mayor vida útil pudiendo ofrecer unas 45.000 horas de uso. La luz más ecológica. No sólo por el ahorro energético sino por los componentes químicos que la forman.",
    },
    {
      id: 18,
      image: OpticasLed,
      title: "Opticas Led",
      price: 4500,
      description:
        "Las ópticas led se centra en el diseño y construcción de espejos, lentes y diversos elementos que protegen y ayudan a controlar y dirigir la luz pudiendo ampliar o reducir el haz de luz proyectada.",
    },
    {
      id: 19,
      image: Aerosoles,
      title: "Aerosoles",
      price: 4500,
      description:
        "Toda la gama de productos estan certificados bajo las normas ISO-9001 e ISO-14001 y fabricados con estrictos controles teniendo siempre un alto compromiso hacia la calidad y consistencia.",
    },
    {
      id: 20,
      image: Drivers,
      title: "Drivers Led",
      price: 4500,
      description:
        "El funcionamiento y la duración de una luminaria LED depende en gran medida del driver que estabiliza la corriente y proporciona protección térmica.",
    },
    {
      id: 21,
      image: Leds,
      title: "Leds",
      price: 4500,
      description:
        "Las ópticas led se centra en el diseño y construcción de espejos, lentes y diversos elementos que protegen y ayudan a controlar y dirigir la luz pudiendo ampliar o reducir el haz de luz proyectada",
    },
    {
      id: 22,
      image: Aerosoles,
      title: "Aerosol",
      price: 4500,
      description:
        "Toda la gama de productos estan certificados bajo las normas ISO-9001 e ISO-14001 y fabricados con estrictos controles teniendo siempre un alto compromiso hacia la calidad y consistencia.",
    },
    {
      id: 23,
      image: Baterias1,
      title: "Baterias",
      price: 4500,
      description:
        "Distribuyen energía de alta corriente local y se utilizan para conectar equipos de alto voltaje en los patios eléctricos y equipos de bajo voltaje en los bancos de baterías.",
    },
    {
      id: 24,
      image: Busbar1,
      title: "Busbar",
      price: 4500,
      description:
        "Toda la gama de productos estan certificados bajo las normas ISO-9001 e ISO-14001 y fabricados con estrictos controles teniendo siempre un alto compromiso hacia la calidad y consistencia.",
    },
    {
      id: 25,
      image: Condensadores1,
      title: "Condensadores",
      price: 4500,
      description:
        "Los condensadores están diseñados para ofrecer un rendimiento consistente en aplicaciones de seguridad bajo condiciones ambientales adversas a la vez que satisfacen las necesidades en los entornos industriales.",
    },
    {
      id: 26,
      image: Conectores1,
      title: "Conectores",
      price: 4500,
      description:
        "Los conectores permiten la instalación sencilla, rápida y fiable de máquinas e instalaciones industriales. Sus carcasas protegen contra movimiento mecánico y previenen la entrada de chorros de agua o polvo",
    },
    {
      id: 27,
      image: Contactores1,
      title: "Contactores",
      price: 4500,
      description:
        "Los contactores tienen la capacidad de abrir y cerrar circuitos en carga. Permiten automatizar fácilmente el arranque y paro de motores y posibilitan el control de una maquina desde varios puntos o estaciones de maniobra.",
    },
    {
      id: 28,
      image: Disipadores1,
      title: "Disipadores",
      price: 4500,
      description:
        "Actualmente los requerimientos de disipación en espacios reducidos aumentan y mediante los radiadores se consiguen valores realmente buenos.",
    },
    {
      id: 29,
      image: FuenteAlimentacion1,
      title: "Fuentes de Alimentacion",
      price: 4500,
      description:
        "Las fuentes de alimentación han sido diseñadas para el uso en el sector industrial, laboratorios y en las telecomunicaciones y en aplicaciones especiales como navales y ferroviarias.",
    },
    {
      id: 30,
      image: Fusibles1,
      title: "Fusibles",
      price: 4500,
      description:
        "Componentes de seguridad utilizados para prevenir daños por exceso de corriente eléctrica en un circuito eléctrico, o para la protección general de equipos eléctricos o electrónicos y redes eléctricas",
    },
    {
      id: 31,
      image: Interruptores1,
      title: "Interruptores",
      price: 4500,
      description:
        "Integración de un interruptor y un seccionador en una misma unidad. El desarrollo de la tecnología de los interruptores ha hecho posible una importante reducción de su mantenimiento y un aumento de su fiabilida",
    },
    {
      id: 32,
      image: ModuloPotencia1,
      title: "Modulo de Potencia",
      price: 4500,
      description:
        "Los dispositivos de control de potencia ayudan a controlar el flujo de energía que se transfiere a la carga. Nos entregan alta eficiencia y variando el ciclo de trabajo del dispositivo de control se puede regular el voltaje de salida",
    },
    {
      id: 33,
      image: ProteccionTension1,
      title: "Proteccion Sobre Tension",
      price: 4500,
      description:
        "Los dispositivos ProTec están especialmente indicados en la protección ante sobretensiones y descargas producidas por impactos indirectos de rayos en la parte de continua de sistemas de alimentación AC/DC, instalaciones fotovoltaicas, turbinas eólicas y equipos industriales.",
    },
    {
      id: 34,
      image: Reles1,
      title: "Reles",
      price: 4500,
      description:
        "Los Relés o relevadores, permiten desarrollar una conmutación a distancia, controlando altas tensiones con un bajo voltaje en retorno. También sirven para interrumpir la alimentación de corriente alterna.",
    },
    {
      id: 35,
      image: Resistencias1,
      title: "Resistencia",
      price: 4500,
      description:
        "Se usan en aplicaciones donde se requiere disipar una gran potencia.",
    },
    {
      id: 36,
      image: SensoresHall1,
      title: "Sensores Efectos Hall",
      price: 4500,
      description:
        "Los sensores de efecto Hall se han convertido en una pieza fundamental en el desarrollo de proyectos de automatización y diseño de dispositivos electrónicos portátiles",
    },
    {
      id: 37,
      image: Termostatos,
      title: "Termostatos",
      price: 4500,
      description:
        "Los termostatos son cada vez más habituales debido una serie de ventajas: 1-Pueden estar libres de partes móviles y contactos que sufren deterioro. 2-Se puede configurar tanto una temperatura como un umbral o un tiempo mínimo entre activaciones.",
    },
    {
      id: 38,
      image: Transformadores,
      title: "Transformadores Planares",
      price: 4500,
      description:
        "Los transformadores planares ofrecen una alternativa atractiva a las formas convencionales de núcleos cuando se necesitan elementos mágneticos de perfil bajo (poca altura).",
    },
    {
      id: 39,
      image: Ultracaps1,
      title: "Ultracaps",
      price: 4500,
      description:
        "Los ultracapacitores son capaces de almacenar y descargar energía de manera muy rápida y eficaz. Debido a sus muchos beneficios, los ultracapacitores se están utilizando actualmente en miles de aplicaciones diferentes.",
    },
    {
      id: 40,
      image: Ventiladores,
      title: "Ventiladores",
      price: 4500,
      description:
        "Los ventiladores han sido el estándar en refrigeración electrónica durante décadas. Compactos, silenciosos y altamente eficientes, los ventiladores EBM PAPST se adaptan a cualquier situación de enfriamiento y pueden conectarse en red de manera inteligente",
    },
  ],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );
      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }

    case TYPES.REMOVE_ONE_PRODUCT: {
      let itemToDelete = state.cart.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }

    case TYPES.REMOVE_ALL_PRODUCTS: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case TYPES.CLEAR_CART:
      return shoppingInitialState;
    default:
      return state;
  }
}
