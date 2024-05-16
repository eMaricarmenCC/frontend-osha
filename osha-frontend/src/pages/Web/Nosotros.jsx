import React, { createContext, useContext, useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { PiHandshakeFill } from "react-icons/pi";
import { ChevronDown } from "react-feather";
import { FcApproval, FcViewDetails } from "react-icons/fc";


function Nosotros(){

  const { t, i18n } = useTranslation("nosotros");

  return (
    <div className="bg-grisFondo">
      {/* Breadcrumbs */}
      <Breadcrumbs/>
      <WhoWeAre/>
      <LegalNature/>
      <InternationalCooperation/>
      <PrivacyAndSecurityDeclaration/>
    </div>
  )   
}

// Breadcrumbs para la cabecera de cada página 
function Breadcrumbs(){
  return(
    <div className="relative w-full" style={{height:150}}>
      <img src="/src/assets/img-nosotros/business.jpg" alt="Background Image" class="object-cover object-center w-full h-full" />
      <img src="" alt="Background Image" className="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-row px-5 items-center justify-between">
        <div className="flex flex-row gap-2 items-center">
          <FaBuildingColumns color="white" style={{height:20, width:20}} />
          <h2 className="text-3xl text-white font-bold">Nosotros</h2>
        </div>
        <div className="bg-white bg-opacity-20 rounded-lg p-3 flex items-center flex-wrap">
          <ul className="flex items-center">
            <li className="inline-flex items-center">
              <Link to="/" className="text-gray-600 hover:text-primary transform transition-transform hover:scale-110">
                <FaHome style={{color:'white'}}/>
              </Link>
              <span className="mx-4 h-auto text-white font-medium">/</span>
            </li>
            <li className="inline-flex items-center">
              <Link to="#" className="hover:text-azulClaro text-azulClaro transform transition-transform hover:scale-110">Nosotros</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Card = ({ icon, title, text, backgroundClass, borderClass, textColorClass }) => {
  return (
    <div className={`p-5 ${backgroundClass} border-l-8 ${borderClass} rounded-r-lg shadow-lg flex items-center gap-3`}>
      <div>
        {icon}
      </div>
      <div>
        <h4 className={`${textColorClass}`}><b>{title}</b></h4>
        <p className="mt-2 text-xs">{text}</p>
      </div>
    </div>
  );
};

const Email = () => {
  return(
    <></>
  );
};

function WhoWeAre(){

  const { t, i18n } = useTranslation("nosotros");

  return(
    <>
    {/* whoWeAre */}
    <div>
      <div className="px-5 py-10 lg:py-20 w-full flex justify-center">
        <div className="lg:mx-8 lg:flex lg:max-w-10xl lg:shadow-lg rounded-lg" style={{ backgroundImage: "url('/src/assets/papel/papel3.jpeg')" }}>
          <div className="lg:w-2/4">
            <div className="lg:scale-110 h-80 bg-cover lg:w-full lg:h-full rounded-b-none border lg:rounded-lg"
              style={{backgroundImage:'url("/src/assets/img-nosotros/nosotrosCrop.jpg")'}}>
            </div>
          </div>
          <div class="py-12 px-6 lg:px-12 max-w-3xl md:max-w-7xl lg:w-2/4 rounded-t-none border lg:rounded-lg">
            <h2 class="text-3xl text-secondary font-bold">{t("whoWeAre.title")}</h2>
            <p className="mt-2">{t("whoWeAre.p1")}</p>
            <p className="mt-2">{t("whoWeAre.p2")}</p>
            <div class="mt-8">
                <a href="#" class="bg-primary text-gray-100 px-5 py-3 font-semibold rounded">Contactanos</a>
            </div>
          </div>
        </div>
      </div>
      {/* Seccion de cartillas */}
      <div className="px-5 w-full flex justify-center">
        <div className="flex flex-col md:flex-row gap-5 max-w-6xl">
          <Card
            icon={<HiOutlineBuildingOffice2 style={{color:"var(--lilaFuerte)",width:50, height:50}}/>}
            title={t("whoWeAre.tit2-oshins")}
            text={t("whoWeAre.oshins")}
            backgroundClass="bg-white"
            borderClass="border-lilaFuerte"
            textColorClass="text-lilaFuerte"
          />
          <Card
            icon={<PiHandshakeFill style={{color:"var(--mintFuerte)", width:50, height:50}}/>}
            title={t("whoWeAre.tit3-compromise")}
            text={t("whoWeAre.compromise")}
            backgroundClass="bg-white"
            borderClass="border-mintFuerte"
            textColorClass="text-mintFuerte"
          />
        </div>
      </div>
      {/* Correo */}

    </div>
    </>
  );
};

function LegalNature(){

  const { t, i18n } = useTranslation("nosotros");

  return(
    <>
    {/* legalNature */}
    <div className="px-5 py-10 lg:px-20 xl:px-20 mt-20" style={{ backgroundImage: "url('/src/assets/papel/papelSeamless.jpg')"}}>
      <div class="overflow-hidden flex flex-row mx-auto">
        <img class="w-full max-w-xl rounded-l-full" src="/src/assets/img-nosotros/juridic.jpg" alt="osha-institute"/>
        <div class={`relative -ml-40 px-10 pt-8 pb-8 bg-white m-10 rounded-xl shadow-xl`}>
          <h4 class={`font-semibold text-lg inline-block ease-in-out inline-block mb-1`}>{t("legalNature.title")}</h4>
          <Line/>
          <p class="text-gray-500 text-sm mt-3">{t("legalNature.content")}</p>
        </div>
      </div>
    </div>
    <div className="px-5 mt-10">
      <div className="flex flex-col lg:flex-row gap-4">
        <CardFotTex
          title={t("legalNature.tit2-mision")}
          text={t("legalNature.mision")}
          textColorClass="text-primary"
          img="/src/assets/img-nosotros/eduaction.jpeg"
        />
        <CardFotTex
          title={t("legalNature.tit2-vision")}
          text={t("legalNature.vision")}
          textColorClass="text-primary"
          img="/src/assets/img-nosotros/profesionals.jpg"
        />
      </div>
    </div>
    </>
  );
};

const CardFotTex = ({ title, text, textColorClass, img}) => {
  return(
    <div class="overflow-hidden flex flex-col max-w-xl mx-auto">
      <img class="w-full rounded-2xl" src={img} alt="osha-institute"/>
      <div class={`relative -mt-28 px-10 pt-8 pb-8 bg-white m-10 rounded-xl shadow-xl`}>
        <h4 class={`${textColorClass} font-semibold text-lg inline-block ease-in-out inline-block mb-1`}>{title}</h4>
        <Line/>
        <p class="text-gray-500 text-sm mt-3">{text}</p>
      </div>
    </div>
  );
};

const Line = () => {
  return (
    <div className="flex">
      <div className="bg-secondary h-1 w-5"></div>
      <div className="bg-white h-1 w-2"></div>
      <div className="bg-secondary h-1 w-20"></div>
    </div>
  );
};

function InternationalCooperation(){

  const { t, i18n } = useTranslation("nosotros");

  return(
    <>
    {/* internationalCooperation */}
    <div className="px-10 py-10 mt-5 py-14 bg-azulClaro">
      <div className="bg-white p-5 rounded-lg">
        <h2>{t("internationalCooperation.title")}</h2>
        {t("internationalCooperation.p", { returnObjects: true }).map((paragraph, index) => (
            <p key={index} className="mt-2">{paragraph}</p>
          ))}
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
    </>
  );
};

function PrivacyAndSecurityDeclaration(){

  const { t, i18n } = useTranslation("nosotros");

  return(
    <>
    {/* privacyAndSecurityDeclaration */}
    <div className="px-10 lg:px-20 xl:px-40">
      <h2>{t("privacyAndSecurityDeclaration.title")}</h2>
      <div>
        <p>{t("privacyAndSecurityDeclaration.content")}</p>

      </div>
      
      <div className="p-10 bg-white rounded-lg shadow-lg flex flex-col gap-5">
        <p>{t("privacyAndSecurityDeclaration.queans1.answer")}</p>
        <Accordian className='flex flex-col gap-3' >
          <AccordianItem value='1' trigger={t("privacyAndSecurityDeclaration.queans1.question")}>
            {t("privacyAndSecurityDeclaration.queans1.answer")}
          </AccordianItem>
          <AccordianItem value='2' trigger={t("privacyAndSecurityDeclaration.queans2.question")}>
            {t("privacyAndSecurityDeclaration.queans2.answer")}
          </AccordianItem>
          <AccordianItem value='3' trigger={t("privacyAndSecurityDeclaration.queans3.question")}>
            {t("privacyAndSecurityDeclaration.queans3.answer")}
          </AccordianItem>
          <AccordianItem value='4' trigger={t("privacyAndSecurityDeclaration.queans4.question")}>
            {t("privacyAndSecurityDeclaration.queans4.answer")}
          </AccordianItem>
          <AccordianItem value='5' trigger={t("privacyAndSecurityDeclaration.queans5.question")}>
            {t("privacyAndSecurityDeclaration.queans5.answer")}
          </AccordianItem>
          <AccordianItem value='6' trigger={t("privacyAndSecurityDeclaration.queans6.question")}>
            {t("privacyAndSecurityDeclaration.queans6.answer")}
          </AccordianItem>
          <AccordianItem value='7' trigger={t("privacyAndSecurityDeclaration.queans7.question")}>
            {t("privacyAndSecurityDeclaration.queans7.answer")}
          </AccordianItem>
        </Accordian>
      </div>
    </div>
    </>
  );
};

const AccordianContext = createContext();

function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  )
}

function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext)
  const open = selected === value

  const ref = useRef(null)

  return (
    <li className="rounded-lg shadow-lg border-b bg-white" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 font-medium"
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  )
}

export default Nosotros;