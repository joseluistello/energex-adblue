import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/mentors/christian-buehner-DItYlc26zVI-unsplash.jpg',
    name: 'Grab',
    category: 'Transporte en Línea',
    description:
      'AdBlue ha sido un socio valioso para nuestra empresa de transporte en línea. Su solución nos ha ayudado a reducir nuestras emisiones y mantenernos en cumplimiento con las regulaciones ambientales. Un aliado confiable en nuestro camino hacia la sostenibilidad.',
    company: {
      name: 'Grab',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 2,
    photo: '/images/mentors/jonas-kakaroto-KIPqvvTOC1s-unsplash.jpg',
    name: 'Google',
    category: 'Tecnología',
    description:
      'Como líder en tecnología, Google se enorgullece de asociarse con AdBlue para promover prácticas de transporte más ecológicas. AdBlue ha demostrado su eficacia en la reducción de emisiones, lo que contribuye a un futuro más limpio y sostenible.',
    company: {
      name: 'Google',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 3,
    photo: '/images/mentors/noah-buscher-8A7fD6Y5VF8-unsplash.jpg',
    name: 'Airbnb',
    category: 'Hospitalidad',
    description:
      'Airbnb se complace en asociarse con AdBlue para brindar a nuestros anfitriones y huéspedes una experiencia más ecológica. La solución de AdBlue ayuda a reducir la huella de carbono de nuestros usuarios, lo que es fundamental para nuestra visión de viajes sostenibles.',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
  {
    id: 4,
    photo: '/images/mentors/philip-martin-5aGUyCW_PJw-unsplash.jpg',
    name: 'Microsoft',
    category: 'Tecnología',
    description:
      'En Microsoft, creemos en la importancia de la sostenibilidad ambiental. AdBlue ha demostrado ser una solución valiosa para reducir las emisiones en nuestra flota de vehículos. Colaboramos con AdBlue para un futuro más verde y limpio.',
    company: {
      name: 'Microsoft',
      logo: '/images/companies/microsoft.png',
    },
  },
];