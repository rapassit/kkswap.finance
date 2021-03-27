import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: "https://swap.peps.today/",
  },
  {
    label: "PEPSwap AMM",
    icon: 'ExchangeIcon',
    href: "/swap",
  },
  {
    label: "Liquidity",
    icon: 'LiquidityIcon',
    href: "/pool",
  },
  {
    label: 'Buy PEPR',
    icon: 'InfoIcon',
    href: '/swap?outputCurrency=0x019be1796178516e060072004f267b59a49a0801',
  },
  {
    label: 'Pepper Farms',
    icon: 'FarmIcon',
    href: 'https://swap.peps.today/',
  },
  {
    label: 'Green House',
    icon: 'PoolIcon',
    href: 'https://swap.peps.today/',
  },
  {
    label: 'Lottery (Coming Soon)',
    icon: 'TicketIcon',
    href: '/',
  },
  {
    label: 'NFTs (Coming Soon)',
    icon: 'NftIcon',
    href: '/',
  },
    {
    label: 'Information',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/PEPS-Project',
      },
      {
        label: 'DappRadar (Stats)',
        href: 'https://dappradar.com/binance-smart-chain/defi/pepper-finance',
      },
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x019be1796178516e060072004f267b59a49a0801',
      },
      {
        label: 'PEPR MasterChef',
        href: 'https://bscscan.com/address/0xdfc263b5dd1703a44e5a15f2d65b6062919ba74d',
      },
    ],
  },
  {
    label: 'Tokenomics',
    icon: 'GitbookIcon',
    href: 'https://docs.peps.today/',
  },
  {
    label: 'Eco System',
    icon: 'MoreIcon',
    items: [
      {
        label: "PEPShip Store",
        href: "https://www.pepship.com/",
      },
      {
        label: "Project PEPS",
        href: "https://project.peps.today/",
      },
    ],
  },

]

export default config
