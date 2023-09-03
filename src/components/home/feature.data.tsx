import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Fácil Acceso',
    description: 'Disponible en estaciones de servicio cercanas.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Costo Accesible',
    description: 'Ahorre hasta un 40% en combustible en cada trayecto.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Horario Flexible',
    description: 'Rellene el tanque cuando sea conveniente para usted.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Asesoramiento Expertos',
    description: 'Consulte con nuestros profesionales en AdBlue.',
    icon: <ContactSupportIcon />,
  },
];
