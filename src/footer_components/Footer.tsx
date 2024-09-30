import FooterMenuComponent, { InformationComponent } from './FooterMenuComponent';
import footerLinks from '../data/footerData'; 
export default function Footer() {
  console.log('footerLinks:', footerLinks); 
    return (
        <footer className="footer">
        <div className="footer-content"  style={{ display: 'flex', justifyContent: 'space-around' }}>
          {footerLinks.map((category, index) => (
            <FooterMenuComponent  key={`${category.title}-${index}`} title={category.title} links={category.links} />
          ))}
           <InformationComponent/>
        </div>
       
      </footer>
    );
  }