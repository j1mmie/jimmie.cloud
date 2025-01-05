import './Footer.scss'
import { Hr } from '../../components/atoms/hr/Hr'
import { ContactInfo } from '../../components/molecules/contact-info/ContactInfo'

export function Footer() {
  return <div className="footer">
    <Hr width={80} />
    <br />
    <ContactInfo />
  </div>
}