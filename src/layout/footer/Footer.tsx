import './Footer.scss'
import { SecretCode } from '../secret-code/SecretCode'
import { ContactInfo } from '../contact-info/ContactInfo'

export function Footer() {
  return <div className="footer">
    <SecretCode width={80} />
    <br />
    <ContactInfo />
  </div>
}