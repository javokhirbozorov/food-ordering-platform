import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const navConfig = [
  {
    title: 'Menu',
    path: '/dashboard/menu',
    icon: <MenuBookIcon />,
  },
  {
    title: 'Stock Level',
    path: '/dashboard/stock-level',
    icon: <InventoryIcon />,
  },
  {
    title: 'Opening Hours',
    path: '/dashboard/opening-hours',
    icon: <BrowseGalleryIcon />,
  },
  {
    title: 'Customers',
    path: '/dashboard/customers',
    icon: <GroupIcon />,
  },
];

export default navConfig;
