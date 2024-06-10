import { CustomerProductCard } from '../types/index' // Adjust the import path if needed

export const mockProducts: CustomerProductCard[] = [
  {
    id: 1,
    name: 'Similac Advance Infant Formula',
    brand: 'Abbott',
    price: 25.99,
    rating: 4.7,
    image: 'https://mommomcare.com/wp-content/uploads/2023/01/similac-advance.jpg',
    liked: false,
  },
  {
    id: 2,
    name: 'Enfamil NeuroPro Gentlease Infant Formula',
    brand: 'Enfamil (Mead Johnson)',
    price: 27.49,
    rating: 4.6,
    image: 'https://www.anbebe.vn/wp-content/uploads/2020/08/4dfb4fa6909e6cc0358f.jpg',
    liked: true,
  },
  {
    id: 3,
    name: 'Gerber Good Start GentlePro Infant Formula',
    brand: 'Gerber (Nestlé)',
    price: 23.99,
    rating: 4.5,
    image:
      'https://target.scene7.com/is/image/Target/GUEST_da74f01e-c16f-472f-ab68-3d262c6562a7?wid=488&hei=488&fmt=pjpeg',
    liked: false,
  },
  {
    id: 4,
    name: 'Similac Prenatal Vitamin Gummies',
    brand: 'Abbott',
    price: 19.99,
    rating: 4.8,
    image:
      'https://lh6.googleusercontent.com/proxy/Lohd-WK0lYxyMCaVc_iTC8H-bzESkSRRd9ftIn9frfc9aNTmXdC6vPQdRgNLeCqZfCOGpCWEsb3TmZ6_BOTf1ahWg9J0xUgKpn9WhUQhNEPpWA',
    liked: true,
  },
  {
    id: 5,
    name: 'Nestlé NIDO Kinder 1+ Powdered Milk Beverage',
    brand: 'Nestlé',
    price: 18.99,
    rating: 4.6,
    image: 'https://m.media-amazon.com/images/I/81P0bP6uL7L._SL1500_.jpg',
    liked: false,
  },
  {
    id: 6,
    name: 'Similac for Supplementation Infant Formula',
    brand: 'Abbott',
    price: 24.99,
    rating: 4.5,
    image: 'https://m.media-amazon.com/images/I/61+-L1lClhL._AC_SL1301_.jpg',
    liked: true,
  },
]
