import React from 'react';
import "./FooterMenuComponent.css"

interface LinkItem {
  href: string;
  text: string;
}

interface CategoryListProps {
  title: string;
  links: LinkItem[];
}

const FooterMenuComponent: React.FC<CategoryListProps> = ({ title, links }) => {
  return (
    <div className="category-list">
      <div className="d-none d-md-block d-lg-block">
        <div className="footer__heading text-medium mb-3">{title}</div>
        <nav>
          <ul className="list-unstyled mb-0">
            {links.map((link, index) => (
              <li key={index} className="mb-0">
                <a href={link.href} className="d-inline-block">{link.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      </div>
  );
};

export const InformationComponent: React.FC = () => (
  <div className="info-block d-none d-md-block d-lg-block">
    <div className="footer__heading text-medium mb-3">
      ЦЕНТРАЛЬНИЙ ОФІС
    </div>
    <div className="footer__contact-information">
      <div className="company-details clearfix">
        <div className="company-details-text">
          <p>
            ТОВ "ЮСК УКРАЇНА"<br />м. Київ<br />вул. Іоанна Павла ІІ, 21<br />01042
          </p>
          <div className='jsk-for-b'>
            <strong>JYSK BUSINESS&nbsp;TO&nbsp;BUSINESS</strong>
          <p> 
            <a href="tel:+380442325144">Тел:&nbsp;+380442325144</a>
          </p>
          <p>
            <a href="mailto:b2b-ua@JYSK.com">Імейл: b2b-ua@JYSK.com</a>
          </p>
          <p>
            <a href="/jysk-b2b/kontakt">Зв'яжіться з нами</a>
          </p>
        </div>
        </div>
        <div className='customer-serv'>
          <strong>Відділ по роботі з клієнтами:</strong>
          <p>
            <a href="mailto:onlineshopua@jysk.com">onlineshopua@jysk.com</a>
          </p>
          <p> 
            <a href="tel:+380442470786">Тел:&nbsp;+380442470786</a>
          </p>
          <p>
            <a href="/customer-service">Зв’язатися з нами</a>
          </p>
        </div>
      </div>
    </div>
    <div className="mt-5">
      <div className="footer__heading footer__heading--small d-inline-block text-medium">
        Слідкуйте за JYSK
        </div>
        <ul className="list-unstyled d-flex mb-0 test">
          <li className="mb-0">
            <a href="https://www.facebook.com/JYSK.UA" target="_blank" rel="noreferrer" className="d-inline-block p-2">
              <img  role="img" aria-hidden="true" width="30" height="30" aria-label="" src="src/assets/img/facebooklogo.png"></img>
            </a>
          </li>
          <li className="mb-0">
            <a href="https://www.instagram.com/jyskua/" target="_blank" rel="noreferrer" className="d-inline-block p-2">
            <img  role="img" aria-hidden="true" width="30" height="30" aria-label="" src="src/assets/img/instlogo.png"></img>
            </a>
          </li>
        <li className="mb-0">
          <a href="https://t.me/JYSK_ua" target="_blank" rel="noreferrer" className="d-inline-block p-2">
          <img  role="img" aria-hidden="true" width="30" height="30" aria-label="" src="src/assets/img/tglogo.png"></img>
          </a>
        </li>
        <li className="mb-0">
          <a href="https://www.youtube.com/user/JYSKUA" target="_blank" rel="noreferrer" className="d-inline-block p-2">
          <img  role="img" aria-hidden="true" width="30" height="30" aria-label="" src="src/assets/img/youtubelogo.png"></img>
          </a>
        </li>
        </ul>
        </div>
  </div>
);



export default FooterMenuComponent;
