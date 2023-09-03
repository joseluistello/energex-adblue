import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Ahorro de Combustible Notable',
    content:
      'AdBlue ha demostrado ser una solución crucial en nuestra flota de vehículos de transporte. Hemos experimentado un ahorro de combustible notable, lo que ha reducido nuestros costos operativos de manera significativa. ¡Una elección inteligente para la industria del transporte!',
    user: {
      id: 1,
      name: 'Carlos Ramírez',
      professional: 'Gerente de Flota',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Cumplimiento Normativo Sencillo',
    content:
      'En el competitivo mundo del transporte, cumplir con las regulaciones ambientales es esencial. AdBlue ha hecho que este proceso sea sencillo y eficiente para nosotros. Reducir las emisiones es una parte importante de nuestro compromiso con la sostenibilidad y la responsabilidad social corporativa.',
    user: {
      id: 2,
      name: 'Laura Martínez',
      professional: 'Directora de Operaciones',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Mantenimiento de Motores Confiable',
    content:
      'Como jefe de mantenimiento de nuestra empresa de transporte, puedo afirmar que AdBlue ha contribuido significativamente a mantener nuestros motores en excelente estado. La reducción de emisiones ha ayudado a prolongar la vida útil de nuestros vehículos y a mantenerlos en funcionamiento de manera confiable.',
    user: {
      id: 3,
      name: 'José Pérez',
      professional: 'Jefe de Mantenimiento',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Reducción de Costos Operativos',
    content:
      'AdBlue no solo es bueno para el medio ambiente, sino que también es beneficioso para nuestro negocio. Hemos visto una disminución significativa en los costos operativos relacionados con el combustible y las emisiones. Esto ha mejorado nuestra rentabilidad y competitividad en la industria.',
    user: {
      id: 4,
      name: 'Ana Rodríguez',
      professional: 'Directora Financiera',
      photo: '4.jpg',
    },
  },
  {
    id: 5,
    title: 'Facilita la Expansión Sostenible',
    content:
      'Nuestra empresa de transporte está en constante crecimiento, y AdBlue ha facilitado nuestra expansión sostenible. Hemos podido cumplir con regulaciones más estrictas y mantener una imagen positiva en el mercado, lo que nos ha ayudado a ganar nuevos clientes y contratos.',
    user: {
      id: 5,
      name: 'Juan González',
      professional: 'Director General',
      photo: '5.jpg',
    },
  },
];