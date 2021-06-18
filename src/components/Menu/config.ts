import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: "https://www.championkub.finance/",
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
    label: 'Buy $KCHAMP',
    icon: 'InfoIcon',
    href: '/swap?outputCurrency=0xEFf2B84460535bDbaC5bF12452d48bD3D4bBB0d7',
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
        href: 'https://github.com/ChampionKUB-Finance',
      },
      // {
      //   label: 'Dex.guru',
      //   href: 'https://dex.guru/token/0xEFf2B84460535bDbaC5bF12452d48bD3D4bBB0d7-bsc',
      // },
      {
        label: 'Poocoin.app',
        href: 'https://poocoin.app/tokens/0xEFf2B84460535bDbaC5bF12452d48bD3D4bBB0d7',
      },
    ],
  },
  {
    label: 'Tokenomics',
    icon: 'GitbookIcon',
    href: 'https://championkub2021.gitbook.io/championkub-finance/',
  },

]

export default config
