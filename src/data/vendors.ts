import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faPiggyBank, faCloud, faLemon } from '@fortawesome/free-solid-svg-icons'
import { faRaspberryPi } from '@fortawesome/free-brands-svg-icons'

interface VendorTheme {
  background: string
  textColor: string
}

interface Vendor {
  name: string
  icon: IconDefinition
  theme: VendorTheme
}

const vendors: Record<string, Vendor> = {
  cloudCard: {
    name: 'CloudCard',
    icon: faCloud,
    theme: {
      background: 'linear-gradient(to right, #8bcadf, #a586df, #e699de)',
      textColor: '#000000',
    },
  },
  piggyBank: {
    name: 'PiggyBank',
    icon: faPiggyBank,
    theme: {
      background: '#ffb1e1',
      textColor: '#01014b',
    },
  },
  berryBank: {
    name: 'Berry Bank',
    icon: faRaspberryPi,
    theme: {
      background: '#750239',
      textColor: '#efefef',
    },
  },
  zestyInvesty: {
    name: 'Zesty Investy',
    icon: faLemon,
    theme: {
      background: 'linear-gradient(to bottom left, #1a1a3a, #0f0f1f)',
      textColor: '#DFFF00',
    },
  },
}

export default vendors
