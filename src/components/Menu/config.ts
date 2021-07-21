import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: "https://kkswap.finance/",
  },
  {
    label: "Exchange",
    icon: 'ExchangeIcon',
    href: "/swap",
  },
  {
    label: "Liquidity",
    icon: 'LiquidityIcon',
    href: "/pool",
  },
  {
    label: 'Buy $KKS',
    icon: 'InfoIcon',
    href: '/swap?outputCurrency=0x763a6C694bC8d83e5e7e1D75e0929fd08F415696',
  },
  // {
  //   label: 'Pepper Farms',
  //   icon: 'FarmIcon',
  //   href: 'https://swap.peps.today/',
  // },
    {
    label: 'Information',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/amorthem/kkswap.finance',
      },
      {
        label: 'Dex.guru',
        href: 'https://dex.guru/token/0x763a6C694bC8d83e5e7e1D75e0929fd08F415696-bsc',
      },
      {
        label: 'Poocoin.app',
        href: 'https://poocoin.app/tokens/0x763a6C694bC8d83e5e7e1D75e0929fd08F415696',
      },
    ],
  },
  // {
  //   label: 'Tokenomics',
  //   icon: 'GitbookIcon',
  //   href: 'https://kkswap.gitbook.io/kkswap-finance/',
  // },

]

export default config
