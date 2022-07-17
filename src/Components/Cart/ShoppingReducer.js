import { TYPES } from "./ShopingActions";

export const shoppingInitialState = {
  products: [
    {
      id: 1,
      image: "/Image/Baterias.png",
      title: "Baterias",
      price: 4500,
      description:
        "El almacenamiento de energía eléctrica es el componente decisivo para una integración total de las energías renovables en nuestro día a día. Las gama de baterías está destinada tanto a aplicaciones de movilidad industrial como de soporte de red: respuesta en frecuencia, control de rampa, etc.",
    },
    {
      id: 2,
      image: "/Image/Busbar.png",
      title: "Busbar",
      price: 4500,
      description:
        "Distribuyen energía de alta corriente local y se utilizan para conectar equipos de alto voltaje en los patios eléctricos y equipos de bajo voltaje en los bancos de baterías.",
    },
    {
      id: 3,
      image: "/Image/Condensadores.png",
      title: "Condensadores",
      price: 4500,
      description:
        "Los condensadores están diseñados para ofrecer un rendimiento consistente en aplicaciones de seguridad bajo condiciones ambientales adversas a la vez que satisfacen las necesidades en los entornos industriales.",
    },
    {
      id: 4,
      image: "/Image/Conectores.png",
      title: "Conectores",
      price: 4500,
      description:
        "Los conectores permiten la instalación sencilla, rápida y fiable de máquinas e instalaciones industriales. Sus carcasas protegen contra movimiento mecánico y previenen la entrada de chorros de agua o polvo",
    },
    {
      id: 5,
      image: "/Image/Contactores.png",
      title: "Contactores",
      price: 4500,
      description:
        "Los contactores tienen la capacidad de abrir y cerrar circuitos en carga. Permiten automatizar fácilmente el arranque y paro de motores y posibilitan el control de una maquina desde varios puntos o estaciones de maniobra.",
    },
    {
      id: 6,
      image: "/Image/Disipadores.png",
      title: "Disipadores",
      price: 4500,
      description:
        "Actualmente los requerimientos de disipación en espacios reducidos aumentan y mediante los radiadores se consiguen valores realmente buenos.",
    },
    {
      id: 7,
      image: "/Image/Fuente Alimentacion.png",
      title: "Fuentes de Alimentacion",
      price: 4500,
      description:
        "Actualmente los requerimientos de disipación en espacios reducidos aumentan y mediante los radiadores se consiguen valores realmente buenos.",
    },
    {
      id: 8,
      image: "/Image/Fusibles.png",
      title: "Fusibles",
      price: 4500,
      description:
        "Componentes de seguridad utilizados para prevenir daños por exceso de corriente eléctrica en un circuito eléctrico, o para la protección general de equipos eléctricos o electrónicos y redes eléctricas",
    },
    {
      id: 9,
      image: "/Image/Interruptores.png",
      title: "Interruptores",
      price: 4500,
      description:
        "Las ópticas led se centra en el diseño y construcción de espejos, lentes y diversos elementos que protegen y ayudan a controlar y dirigir la luz pudiendo ampliar o reducir el haz de luz proyectada.",
    },
    {
      id: 10,
      image: "/Image/Modulo Potencia.png",
      title: "Modulo de Potencia",
      price: 4500,
      description:
        "Los dispositivos de control de potencia ayudan a controlar el flujo de energía que se transfiere a la carga. Nos entregan alta eficiencia y variando el ciclo de trabajo del dispositivo de control se puede regular el voltaje de salida",
    },
    {
      id: 11,
      image: "/Image/Proteccion Sobretension.png",
      title: "Proteccion Sobretension",
      price: 4500,
      description:
        "Los dispositivos ProTec están especialmente indicados en la protección ante sobretensiones y descargas producidas por impactos indirectos de rayos en la parte de continua de sistemas de alimentación AC/DC, instalaciones fotovoltaicas, turbinas eólicas y equipos industriales.",
    },
    {
      id: 12,
      image: "/Image/Reles.png",
      title: "Reles",
      price: 4500,
      description:
        "Los Relés o relevadores, permiten desarrollar una conmutación a distancia, controlando altas tensiones con un bajo voltaje en retorno. También sirven para interrumpir la alimentación de corriente alterna.",
    },
    {
      id: 13,
      image: "/Image/Resistencias.png",
      title: "Resistencias",
      price: 4500,
      description:
        "Se usan en aplicaciones donde se requiere disipar una gran potencia.",
    },
    {
      id: 14,
      image: "/Image/Sensores Hall.png",
      title: "Sensores Efecto Hall",
      price: 4500,
      description:
        "Los sensores de efecto Hall se han convertido en una pieza fundamental en el desarrollo de proyectos de automatización y diseño de dispositivos electrónicos portátiles",
    },
    {
      id: 15,
      image: "/Image/Ultracaps.png",
      title: "Ultracaps",
      price: 4500,
      description:
        "Los ultracapacitores son capaces de almacenar y descargar energía de manera muy rápida y eficaz. Debido a sus muchos beneficios, los ultracapacitores se están utilizando actualmente en miles de aplicaciones diferentes.",
    },
    {
      id: 16,
      image: "/Image/Drivers Led.png",
      title: "Drivers",
      price: 4500,
      description:
        "El funcionamiento y la duración de una luminaria LED depende en gran medida del driver que estabiliza la corriente y proporciona protección térmica.",
    },
    {
      id: 17,
      image: "/Image/Leds.png",
      title: "Leds",
      price: 4500,
      description:
        "Mayor vida útil pudiendo ofrecer unas 45.000 horas de uso. La luz más ecológica. No sólo por el ahorro energético sino por los componentes químicos que la forman.",
    },
    {
      id: 18,
      image: "/Image/Opticas Leds.png",
      title: "Opticas Led",
      price: 4500,
      description:
        "Las ópticas led se centra en el diseño y construcción de espejos, lentes y diversos elementos que protegen y ayudan a controlar y dirigir la luz pudiendo ampliar o reducir el haz de luz proyectada.",
    },
    {
      id: 19,
      image: "/Image/Aerosoles.png",
      title: "Aeresoles",
      price: 4500,
      description:
        "Toda la gama de productos estan certificados bajo las normas ISO-9001 e ISO-14001 y fabricados con estrictos controles teniendo siempre un alto compromiso hacia la calidad y consistencia.",
    },
    {
      id: 20,
      image: "/Image/Drivers Led.png",
      title: "Drivers Led",
      price: 4500,
      description:
        "El funcionamiento y la duración de una luminaria LED depende en gran medida del driver que estabiliza la corriente y proporciona protección térmica.",
    },
    {
      id: 21,
      image: "/Image/Leds.png",
      title: "Leds",
      price: 4500,
      description:
        "Las ópticas led se centra en el diseño y construcción de espejos, lentes y diversos elementos que protegen y ayudan a controlar y dirigir la luz pudiendo ampliar o reducir el haz de luz proyectada",
    },
    {
      id: 22,
      image: "/Image/Aerosoles.png",
      title: "Aerosol",
      price: 4500,
      description:
        "Toda la gama de productos estan certificados bajo las normas ISO-9001 e ISO-14001 y fabricados con estrictos controles teniendo siempre un alto compromiso hacia la calidad y consistencia.",
    },
    {
      id: 23,
      image: "/Image/Baterias1.png",
      title: "Baterias",
      price: 4500,
      description:
        "Distribuyen energía de alta corriente local y se utilizan para conectar equipos de alto voltaje en los patios eléctricos y equipos de bajo voltaje en los bancos de baterías.",
    },
    {
      id: 24,
      image: "/Image/Busbar1.jpg",
      title: "Busbar",
      price: 4500,
      description:
        "Toda la gama de productos estan certificados bajo las normas ISO-9001 e ISO-14001 y fabricados con estrictos controles teniendo siempre un alto compromiso hacia la calidad y consistencia.",
    },
    {
      id: 25,
      image: "/Image/Condensadores1.jpg",
      title: "Condensadores",
      price: 4500,
      description:
        "Los condensadores están diseñados para ofrecer un rendimiento consistente en aplicaciones de seguridad bajo condiciones ambientales adversas a la vez que satisfacen las necesidades en los entornos industriales.",
    },
    {
      id: 26,
      image: "/Image/Conectores1.jpg",
      title: "Conectores",
      price: 4500,
      description:
        "Los conectores permiten la instalación sencilla, rápida y fiable de máquinas e instalaciones industriales. Sus carcasas protegen contra movimiento mecánico y previenen la entrada de chorros de agua o polvo",
    },
    {
      id: 27,
      image: "/Image/Contactores1.jpg",
      title: "Contactores",
      price: 4500,
      description:
        "Los contactores tienen la capacidad de abrir y cerrar circuitos en carga. Permiten automatizar fácilmente el arranque y paro de motores y posibilitan el control de una maquina desde varios puntos o estaciones de maniobra.",
    },
    {
      id: 28,
      image: "/Image/Disipadores1.jpg",
      title: "Disipadores",
      price: 4500,
      description:
        "Actualmente los requerimientos de disipación en espacios reducidos aumentan y mediante los radiadores se consiguen valores realmente buenos.",
    },
    {
      id: 29,
      image: "/Image/Fuente Alimentacion1.jpg",
      title: "Fuentes de Alimentacion",
      price: 4500,
      description:
        "Las fuentes de alimentación han sido diseñadas para el uso en el sector industrial, laboratorios y en las telecomunicaciones y en aplicaciones especiales como navales y ferroviarias.",
    },
    {
      id: 30,
      image: "/Image/Fusibles1.jpg",
      title: "Fusibles",
      price: 4500,
      description:
        "Componentes de seguridad utilizados para prevenir daños por exceso de corriente eléctrica en un circuito eléctrico, o para la protección general de equipos eléctricos o electrónicos y redes eléctricas",
    },
    {
      id: 31,
      image: "/Image/Interruptores1.jpg",
      title: "Interruptores",
      price: 4500,
      description:
        "Integración de un interruptor y un seccionador en una misma unidad. El desarrollo de la tecnología de los interruptores ha hecho posible una importante reducción de su mantenimiento y un aumento de su fiabilida",
    },
    {
      id: 32,
      image: "/Image/Modulo Potencia1.jpg",
      title: "Modulo de Potencia",
      price: 4500,
      description:
        "Los dispositivos de control de potencia ayudan a controlar el flujo de energía que se transfiere a la carga. Nos entregan alta eficiencia y variando el ciclo de trabajo del dispositivo de control se puede regular el voltaje de salida",
    },
    {
      id: 33,
      image: "/Image/Proteccion Sobretension1.jpg",
      title: "Proteccion Sobre Tension",
      price: 4500,
      description:
        "Los dispositivos ProTec están especialmente indicados en la protección ante sobretensiones y descargas producidas por impactos indirectos de rayos en la parte de continua de sistemas de alimentación AC/DC, instalaciones fotovoltaicas, turbinas eólicas y equipos industriales.",
    },
    {
      id: 34,
      image: "/Image/Reles1.jpg",
      title: "Reles",
      price: 4500,
      description:
        "Los Relés o relevadores, permiten desarrollar una conmutación a distancia, controlando altas tensiones con un bajo voltaje en retorno. También sirven para interrumpir la alimentación de corriente alterna.",
    },
    {
      id: 35,
      image: "/Image/Resistencias1.jpg",
      title: "Resistencia",
      price: 4500,
      description:
        "Se usan en aplicaciones donde se requiere disipar una gran potencia.",
    },
    {
      id: 36,
      image: "/Image/Sensores Hall1.jpg",
      title: "Sensores Efectos Hall",
      price: 4500,
      description:
        "Los sensores de efecto Hall se han convertido en una pieza fundamental en el desarrollo de proyectos de automatización y diseño de dispositivos electrónicos portátiles",
    },
    {
      id: 37,
      image: "/Image/Termostatos.jpg",
      title: "Termostatos",
      price: 4500,
      description:
        "Los termostatos son cada vez más habituales debido una serie de ventajas: 1-Pueden estar libres de partes móviles y contactos que sufren deterioro. 2-Se puede configurar tanto una temperatura como un umbral o un tiempo mínimo entre activaciones.",
    },
    {
      id: 38,
      image: "/Image/Transformadores Planares.jpg",
      title: "Transformadores Planares",
      price: 4500,
      description:
        "Los transformadores planares ofrecen una alternativa atractiva a las formas convencionales de núcleos cuando se necesitan elementos mágneticos de perfil bajo (poca altura).",
    },
    {
      id: 39,
      image: "/Image/Ultracaps1.jpg",
      title: "Ultracaps",
      price: 4500,
      description:
        "Los ultracapacitores son capaces de almacenar y descargar energía de manera muy rápida y eficaz. Debido a sus muchos beneficios, los ultracapacitores se están utilizando actualmente en miles de aplicaciones diferentes.",
    },
    {
      id: 40,
      image: "/Image/Ventiladores.jpg",
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
