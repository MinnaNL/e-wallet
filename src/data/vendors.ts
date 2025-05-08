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
      background: 'linear-gradient(to bottom, #ADD8E6,rgb(194, 176, 228), #ffcff3)',
      textColor: ' #25212d',
    },
  },
  piggyBank: {
    name: 'PiggyBank',
    icon: faPiggyBank,
    theme: {
      background: ' #f0b1d8',
      textColor: ' #000042',
    },
  },
  berryBank: {
    name: 'Berry Bank',
    icon: faRaspberryPi,
    theme: {
      background: 'linear-gradient(to bottom right, #750239,rgb(106, 8, 55)',
      textColor: 'rgb(205, 203, 203)',
    },
  },
  zestyInvesty: {
    name: 'Zesty Investy',
    icon: faLemon,
    theme: {
      background: 'linear-gradient(to bottom left, #232425, #1a1a1a)',
      textColor: ' #DFFF00',
    },
  },
}

export default vendors
