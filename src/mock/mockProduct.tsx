import { CustomerProductCard } from '../types/index' // Adjust the import path if needed

export const mockProducts: CustomerProductCard[] = [
  {
    id: 1,
    name: 'Similac Advance Infant Formula',
    brand: 'Abbott',
    price: 25.99,
    rating: 4.7,
    stockStatus: 'In Stock',
    image: 'https://mommomcare.com/wp-content/uploads/2023/01/similac-advance.jpg',
    quantity: 1,
    description: 'Similac Advance Infant Formula with iron provides complete nutrition for your baby’s first year.',
    liked: false,
  },
  {
    id: 2,
    name: 'Enfamil NeuroPro Gentlease Infant Formula',
    brand: 'Enfamil (Mead Johnson)',
    price: 27.49,
    rating: 4.6,
    stockStatus: 'In Stock',
    image: 'https://www.anbebe.vn/wp-content/uploads/2020/08/4dfb4fa6909e6cc0358f.jpg',
    quantity: 1,
    description:
      'Enfamil NeuroPro Gentlease Infant Formula is designed to reduce fussiness, gas, and crying in 24 hours.',
    liked: true,
  },
  {
    id: 3,
    name: 'Gerber Good Start GentlePro Infant Formula',
    brand: 'Gerber (Nestlé)',
    price: 23.99,
    rating: 4.5,
    stockStatus: 'In Stock',
    image:
      'https://target.scene7.com/is/image/Target/GUEST_da74f01e-c16f-472f-ab68-3d262c6562a7?wid=488&hei=488&fmt=pjpeg',
    quantity: 1,
    description:
      'Gerber Good Start GentlePro Infant Formula helps to promote soft stools and is easy for babies to digest.',
    liked: false,
  },
  {
    id: 4,
    name: 'Similac Prenatal Vitamin Gummies',
    brand: 'Abbott',
    price: 19.99,
    rating: 4.8,
    stockStatus: 'In Stock',
    image:
      'https://lh6.googleusercontent.com/proxy/Lohd-WK0lYxyMCaVc_iTC8H-bzESkSRRd9ftIn9frfc9aNTmXdC6vPQdRgNLeCqZfCOGpCWEsb3TmZ6_BOTf1ahWg9J0xUgKpn9WhUQhNEPpWA',
    quantity: 1,
    description:
      'Similac Prenatal Vitamin Gummies provide essential nutrients to help support your baby’s growth and development.',
    liked: true,
  },
  {
    id: 5,
    name: 'Nestlé NIDO Kinder 1+ Powdered Milk Beverage',
    brand: 'Nestlé',
    price: 18.99,
    rating: 4.6,
    stockStatus: 'In Stock',
    image: 'https://m.media-amazon.com/images/I/81P0bP6uL7L._SL1500_.jpg',
    quantity: 1,
    description: 'Nestlé NIDO Kinder 1+ Powdered Milk Beverage is specially formulated for children ages 1-3.',
    liked: true,
  },
  {
    id: 6,
    name: 'Similac for Supplementation Infant Formula',
    brand: 'Abbott',
    price: 24.99,
    rating: 4.5,
    stockStatus: 'In Stock',
    image: 'https://m.media-amazon.com/images/I/61+-L1lClhL._AC_SL1301_.jpg',
    quantity: 1,
    description:
      'Similac for Supplementation Infant Formula is designed for breastfeeding moms who choose to introduce formula.',
    liked: true,
  },
]
