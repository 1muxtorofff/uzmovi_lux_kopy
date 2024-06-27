import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Footer() {

    const {t} = useTranslation("home")
  return (

          <div className='w-[100%] bg-[#222933] font-[inherit] mt-20 text-[#a5bbdc] text-lg uppercase'>
                 <div id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-xs-12">
                            <p className="footer-description h-c">
                                <img src="https://uzmovi.com/images/logo.gif" className="footer-logo" alt="UZMOVi&#x20;onlayn&#x20;kinoteatri"/>
                            </p>
                        </div>
                        <div className="col-md-6 col-xs-12 footer-description h-c">
                            <ul className="nav-footer">
                                <li>
                                    <a href="https://uzmovi.com/ads.html" title="Reklama">{t("reklama")}</a>
                                </li>
                                <li>
                                    <a href="https://uzmovi.com/rightholder_eng.html" title="DMCA">DMCA</a>
                                </li>
                                <li>
                                    <a href="https://uzmovi.com/rules.html" title="Sayt&#x20;qoidalari">{t("qoida")}</a>
                                </li>
                                <li>
                                    <a href="https://uzmovi.com/contact" title="Qayta&#x20;aloqa">{t("aloqa")}</a>
                                </li>
                                <li>
                                    <a href="https://uzmovi.com/age.html" title="Yosh&#x20;toifasi">{t("yosh")}</a>
                                </li>
                            </ul>
                            <input type="hidden" className="menu-data" value="1tGC0tAuej4gMhhLLSFWQkEL2XdUdgEDJLn68AGt8+eqqhRenb8="/>
                        </div>
                        <div className="col-md-3 col-xs-12 footer-description h-c">
                            <ul className="count">
                                <li>
                                    <img src="https://uzmovi.com/images/16_plus.png" alt="#"/>
                                </li>
                                <li>
                                    <img src="https://uzmovi.com/images/hit.gif" alt="#"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="copirating">
                    <div className="container">
                        <p className="copirating">
                            &copy;<strong>UZMOVi.com</strong>
                            — 2019 - 2024
                        </p>
                        <p>{t("footer1")}</p>
                        <p>
                        {t("footer2")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
