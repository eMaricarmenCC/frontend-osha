import React from "react";
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line1 } from "../../components/ui/Line";
import { CardGrado } from '../../components/ui/Card';
import { ImageWithInnerBorder } from '../../components/ui/Image';
import { ListIconWithBg, ListIcon, ListPoint } from '../../components/ui/List';

import { FaBuildingColumns } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { PiCertificate } from "react-icons/pi";
import { BsPersonCheck } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { TbHexagonNumber1, TbHexagonNumber2, TbHexagonNumber3, TbHexagonNumber4, TbHexagonNumber5, TbHexagonNumber6 } from "react-icons/tb";


function Acreditacion() {
  const { t, i18n } = useTranslation("acreditacion");
  
  return(
    <section className="bg-white">
      <Breadcrumbs
        text={t("accreditation.title")}
        icon={<AiFillSafetyCertificate/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20">
        <div>
          <h1 className="text-primary font-bold uppercase">{t("accreditation.title")}</h1>
          <Line1 bgColorClass={"bg-secondary"}/>
          <p className="mt-10">{t("accreditation.content")}</p>
        </div>

        {/* Verificacion de certificadopor código */}
        <div className="mt-10">
          <h3 className="">Verificación de certificados por código</h3>
          <div className="mt-4 mx-auto bg-gray-100 p-5 rounded-lg flex items-center gap-5 shadow-lg border border-primary">
            <PiCertificate style={{color:"var(--secondary)", height:50, width:50}}/>
            <div className="relative w-full max-w-xl bg-white rounded-full">
              <input placeholder="Ingrese su código osha" className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-sky-200 focus:border-sky-500" type="text" name="query" id="query"/>
              <button type="submit" className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-sky-600 sm:px-6 sm:text-base sm:font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 gap-2">
                <IoMdSearch/>
                Buscar
              </button>
            </div>
          </div>
        </div>

        {/* Especializaciones */}
        <div className="mt-10">
          <div className="bg-sky-600 p-2 bg-gray-100 font-bold rounded-full">
            <h3 className="text-center text-white border-2 p-2 border-white uppercase rounded-full">Especializaciones</h3>
          </div>
          <Especializaciones/>
        </div>

        {/* Grados */}
        <div className="mt-10">
          <div className="bg-sky-600 p-2 bg-gray-100 font-bold rounded-full">
            <h3 className="text-center text-white border-2 p-2 border-white uppercase rounded-full">Grados</h3>
          </div>
          <Grados/>
        </div>

        {/* Trainers (Entrenadores) */}
        <div className="mt-10">
        <div className="bg-sky-600 p-2 bg-gray-100 font-bold rounded-full">
            <h3 className="text-center text-white border-2 p-2 border-white uppercase rounded-full">Trainer</h3>
          </div>
          <Trainers/>
        </div>
    </div>
    </section>
    
  );
};

const Especializaciones = () => {
  const { t, i18n } = useTranslation("grados");
  const gradosFiltrados = t("degreeData", { returnObjects: true }).filter(grado => grado.id.startsWith('e'));
  const handleCardClick = (grado) => {
    navigate(`/grados/${grado.id}`, { state: { grado } });
  };
  return(
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
      {gradosFiltrados.map((grado,index) => (
        <div key={index}>
          <CardGrado
            id={grado.id}
            title={grado.title}
            code={grado.code}
            label={grado.label}
            src={grado.src}
            onClick={() => handleCardClick(grado)}
          />
        </div>
      ))}
    </div>
  );
};

const Grados = () => {
  const { t, i18n } = useTranslation("grados");
  const gradosFiltrados = t("degreeData", { returnObjects: true }).filter(grado => 
    !grado.id.startsWith('e') && !grado.id.startsWith('t')
  );
  const handleCardClick = (grado) => {
    navigate(`/grados/${grado.id}`, { state: { grado } });
  };
  return(
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
      {gradosFiltrados.map((grado,index) => (
        <div key={index}>
          <CardGrado
            id={grado.id}
            title={grado.title}
            code={grado.code}
            label={grado.label}
            src={grado.src}
            onClick={() => handleCardClick(grado)}
          />
        </div>
      ))}
    </div>
  );
};

const Trainers = () => {
  const { t, i18n } = useTranslation("grados");
  const gradosFiltrados = t("degreeData", { returnObjects: true }).filter(grado => grado.id.startsWith('t'));
  const handleCardClick = (grado) => {
    navigate(`/grados/${grado.id}`, { state: { grado } });
  };
  return(
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
      {gradosFiltrados.map((grado,index) => (
        <div key={index}>
          <CardGrado
            id={grado.id}
            title={grado.title}
            code={grado.code}
            label={grado.label}
            src={grado.src}
            onClick={() => handleCardClick(grado)}
          />
        </div>
      ))}
    </div>
  );
};


function AcreditacionArea() {
  const { t, i18n } = useTranslation("acreditacion");
  const navigate = useNavigate();
  const handleCardClick = (grado) => {
    navigate(`/grados/${grado.id}`, { state: { grado } });
  };
  return(
    <section className="">
      <Breadcrumbs
        text={"Grados"}
        icon={<FaBuildingColumns/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div>
        <h1></h1>
      </div>
    </section>
  );
};

function AcreditacionAreaDetalle() {
  const { id } = useParams();
  const location = useLocation();
  const { area } = location.state || {};
  const { t, i18n } = useTranslation("grados");
  if (!area) {
    return <div>No hay datos disponibles para esta área de acreditacion.</div>;
  }
  return(
    <section className="">
      <Breadcrumbs
        text={"Areas de Acreditación"}
        icon={<FaBuildingColumns/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-14">
        <div className="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-10">
          <div>
            <h1 className="font-bold uppercase text-primary">{area.title}</h1>
            <Line1 bgColorClass={"bg-secondary"}/>
            <p>{area.content}</p>
            <div className="mt-5">
              <h3 className="mb-3 text-primary font-semibold">{area.areasOfInfluence.title}</h3>
              <ListIconWithBg
                list={area.areasOfInfluence.list}
                icon={<MdOutlineDashboard style={{color:"var(--primary)", height:20, width:20}}/>}
              />
            </div>
            <div className="mt-5">
              <h3 className="text-primary font-semibold">{area.currentAccreditationForProfessionals.title}</h3>
              <ListIcon 
                list={area.currentAccreditationForProfessionals.list}
                icon={<BsPersonCheck style={{color:"var(--primary)", height:25, width:25}}/>}
              />
            </div>
          </div>
          <div className="min-w-[400px] lg:min-w-[500px] xl:min-w-[550px] 2xl:min-w-[600px] max-w-[900px] mx-auto">
            <ImageWithInnerBorder
              src={area.src}
              alt={area.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};


/* ACREDITACION AE */
function AcreditacionAE() {
  const { t, i18n } = useTranslation("acreditacion");
  return(
    <section className="bg-white">
      <Breadcrumbs
        text={t("accreditationAE.accreditationAE.title")}
        icon={<AiFillSafetyCertificate/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-14 xl:py-18">
        <h1 className="text-primary uppercase font-bold">{t("accreditationAE.accreditationAE.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-6 flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-12">
          <div className="">
            <p>{t("accreditationAE.accreditationAE.content")}</p>
            <div className="mt-10">
              <h2 className="text-primary uppercase font-bold">{t("accreditationAE.accreditedEducationAE.title")}</h2>
              <Line1 bgColorClass={"bg-secondary"}/>
              <p className="mt-2">{t("accreditationAE.accreditedEducationAE.content")}</p>
            </div>
          </div>
          <div className="mx-auto md:min-w-[180px] lg:min-w-[210px]  max-w-[300px]">
            <img className="w-full"
              src={"/src/assets/logo/logoAccreditedEducation.png"}
              alt="engineer"
            />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-primary font-bold uppercase">{t("accreditationAE.identity.title")}</h3>
          <Line1 bgColorClass={"bg-secondary"}/>
          <div>
            {t("accreditationAE.identity.content", { returnObjects: true }).map((p, index) => (
              <p key={index} className="mb-3">{p}</p>
            ))}
          </div>
        </div>
        <div className="py-5">
          <Link className="px-6 py-2 min-w-[120px] text-center text-sky-600 border border-sky-600 rounded hover:bg-sky-600 hover:text-white active:bg-sky-500 focus:outline-none focus:ring"
            to="/proceso-acreditacion-ae">
            {t("accreditationAE.button")}
          </Link>
        </div>
      </div>
    </section>
  );
};


function ProcesoAcreditacionAE() {
  const { t, i18n } = useTranslation("acreditacion");
  return(
    <section>
      <Breadcrumbs
        text={t("accreditationAE.accreditationAE.title")}
        icon={<AiFillSafetyCertificate/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-14 xl:py-18">
        <h1 className="text-primary font-bold uppercase">{t("accreditationProcessAE.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-10 flex flex-col gap-5">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col gap-5">
              <CardProcess icon={<TbHexagonNumber1 className="w-full h-full"/>}>
                <p>{t("accreditationProcessAE.list.1st.p")}</p>
              </CardProcess>
              <CardProcess icon={<TbHexagonNumber2 className="w-full h-full" />}>
                <p>{t("accreditationProcessAE.list.2nd.p")}</p>
              </CardProcess>
              <CardProcess icon={<TbHexagonNumber3 className="w-full h-full" />}>
                {t("accreditationProcessAE.list.3rd.p", {returnObjects:true}).map((p,index) => (
                  <p key={index} className="mb-2">{p}</p>
                ))}
              </CardProcess>
            </div>
            <div className="mx-auto lg:min-w-[450px]">
              <ImageWithInnerBorder
                src="/src/assets/img-acreditacion/acreditacion-proceso.avif"
                alt="proceso"
              />
            </div>
          </div>
          <CardProcess icon={<TbHexagonNumber4 className="w-full h-full" />}>
            <p className="mb-4">{t("accreditationProcessAE.list.4th.p")}</p>
            <div className="pl-4">
              <ListPoint
                list={t("accreditationProcessAE.list.4th.list", {returnObjects:true})}
              />
            </div>
          </CardProcess>
          <CardProcess icon={<TbHexagonNumber5 className="w-full h-full" />}>
            <p className="mb-4">{t("accreditationProcessAE.list.5th.p")}</p>
            <div className="pl-4 mb-4">
              <ListPoint
                list={t("accreditationProcessAE.list.5th.list", {returnObjects:true})}
              />
            </div>
            <p>{t("accreditationProcessAE.list.5th.p2")}</p>
            <div className="pl-4 my-4">
              <ListPoint     
                list={t("accreditationProcessAE.list.5th.list", {returnObjects:true})}
              />
            </div>
          </CardProcess>
          <CardProcess icon={<TbHexagonNumber6 className="w-full h-full" />}>
            {t("accreditationProcessAE.list.6th.p", {returnObjects:true}).map((p,index) => (
              <p key={index} className="mb-2">{p}</p>
            ))}
          </CardProcess>
        </div>
        <p className="mt-10 md:pl-10">{t("accreditationProcessAE.p")}</p>
        <div className="md:p md:pl-10 py-10">
          <Link className="px-6 py-2 min-w-[120px] text-center text-sky-600 border border-sky-600 rounded hover:bg-sky-600 hover:text-white active:bg-sky-500 focus:outline-none focus:ring"
            to="/incumplimiento-acreditacion-ae">
            {t("accreditationProcessAE.btn")}
          </Link>
        </div>
      </div>
    </section>
  );
};

const CardProcess = ({icon, children}) => {
  return(
    <div className="flex flex-row gap-2 md:gap-4">
      <div className="min-w-10 min-h-10 max-w-10 max-h-10 flex flex-col gap-2 text-sky-600">
        {icon}
      </div>
      <div className="w-full border-l-4 border-primary pl-4">{children}</div>
    </div>
  );
};


function IncumplimientoAcreditacionAE() {
  const { t, i18n } = useTranslation("acreditacion");
  return(
    <section>
      <Breadcrumbs
        text={t("non-compliances.title")}
        icon={<AiFillSafetyCertificate/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-14 xl:py-18">
        <h1 className="text-primary font-bold uppercase">{t("non-compliances.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-10">
          {t("non-compliances.p", {returnObjects:true}).map((p, index) =>(
            <p key={index} className="pb-2">{p}</p>
          ))}
        </div>
        <div className="mt-8">
          <CardNonCompliances
            list={t("non-compliances.list", {returnObjects:true})}
          />
        </div>
      </div>
    </section>
  );
};

const CardNonCompliances = ({list}) => {
  return(
    <div className="flex flex-col gap-4">
      {list.map((item, index) =>(
        <div key={index} className="bg-gray-100 p-5 rounded-lg">
          <h4 className="text-primary font-semibold">{item.title}</h4>
          <div className="mt-2 pl-4">
            {item.p.map((p, index) =>(
              <p key={index} className="pb-2">{p}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};


export {
  Acreditacion,
  AcreditacionAE,
  AcreditacionArea,
  AcreditacionAreaDetalle,
  ProcesoAcreditacionAE,
  IncumplimientoAcreditacionAE
}