// Define the Brand type

import { Brand } from '@/types'

// Example brand data
export const mockBrands: Brand[] = [
  {
    brandId: 1,
    brandName: 'Abbott',
    brandImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSACAbCOmT8E1kBdkK3PD6d-AboJffWBgwWEA&s',
    brandDesc: 'A global healthcare company providing infant formula and more.',
  },
  {
    brandId: 2,
    brandName: 'Enfamil (Mead Johnson)',
    brandImg:
      'https://greenamerica.org/sites/default/files/styles/wide350/public/2017-04/EnfamilVictory.png?itok=2BBeQT1H',
    brandDesc: 'Trusted by parents and healthcare professionals.',
  },
  {
    brandId: 3,
    brandName: 'Gerber (Nestlé)',
    brandImg: 'https://www.just-food.com/wp-content/uploads/sites/28/2021/04/nestle-gerber-s-1.jpg',
    brandDesc: 'Providing nutritious products for your baby’s growth.',
  },
]
