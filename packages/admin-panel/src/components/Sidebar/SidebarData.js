import React from "react";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ApartmentIcon from "@mui/icons-material/Apartment";

export const SidebarData = [
  {
    title: "Metrics",
    icon: <AnalyticsOutlinedIcon />,
    link: "/admin/metricas",
  },
  {
    title: "Users",
    icon: <PersonIcon />,
    link: "/admin/users",
  },
  {
    title: "Administrators",
    icon: <SettingsIcon />,
    link: "/admin/administradores",
  },
  {
    title: "Hostings",
    icon: <ApartmentIcon />,
    link: "/admin/alojamientos",
  },
];
