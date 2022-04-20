import React from 'react';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ApartmentIcon from '@mui/icons-material/Apartment';

export const SidebarData = [
  {
    title: 'Métricas',
    icon: <AnalyticsOutlinedIcon />,
    link: '/admin/metricas',
  },
  {
    title: 'Usuarios',
    icon: <PersonIcon />,
    link: '/admin/usuarios',
  },
  {
    title: 'Administradores',
    icon: <SettingsIcon />,
    link: '/admin/administradores',
  },
  {
    title: 'Alojamientos',
    icon: <ApartmentIcon />,
    link: '/admin/alojamientos',
  },
];
