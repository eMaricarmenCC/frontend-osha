import React from "react";
import { useTranslation } from "react-i18next";

import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line1, Line } from '../../components/ui/Line';
import { ListPoint } from "../../components/ui/List";
import { Accordian, AccordianItem } from "../../components/ui/Accordions";
import { ImageWithInnerBorder } from '../../components/ui/Image';

import { FaBuildingColumns } from "react-icons/fa6";
import { TbPointFilled } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";


function Certex() {
  const { t, i18n } = useTranslation("certex");
  return(
    <section className="bg-white">
      <Breadcrumbs
        text={"Certex"}
        icon={<FaBuildingColumns/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:pt-15 lg:pt-20">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="">
            <h1 className="text-primary font-bold uppercase">{t("certex.subtitle")}</h1>
            <Line1 bgColorClass={"bg-secondary"}/>
            <p className="mt-10">{t("certex.description")}</p>
            <div className="pt-8 flex flex-row gap-5">
              <a className="px-6 py-2 min-w-[120px] text-center text-white bg-sky-600 border border-sky-600 rounded active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring"
                href="/contactanos">
                Contactar
              </a>
              <a class="px-6 py-2 min-w-[120px] text-center text-sky-600 border border-sky-600 rounded hover:bg-sky-600 hover:text-white active:bg-sky-500 focus:outline-none focus:ring"
                href="mailto:certex@osha.es">
                  <span className="flex flex-row gap-2 items-center">
                    <MdOutlineEmail/>
                    <span>certex@osha.es</span>
                  </span>
              </a>
            </div>
          </div>
          <div className="mx-auto lg:min-w-[400px] xl:min-w-[450px] 2xl:min-w-[550px]">
            <ImageWithInnerBorder
              src="/src/assets/img/certex.avif"
              alt="proceso"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 px-5 md:px-10 lg:px-20 xl:px-40 py-10">
        {/* Objetivo */}
        <div className="bg-white p-5 rounded-r-lg shadow-lg border-l-8 border-primary">
          <h3 className="mb-1 text-primary font-bold uppercase">{t("certex.objective.title")}</h3>
          <Line/>
          <p className="mt-4">{t("certex.objective.content")}</p>
        </div>
        {/* Beneficios */}
        <div className="mt-10 bg-white p-5 rounded-l-lg shadow-lg border-r-8 border-primary">
          <h3 className="mb-1 text-primary font-bold uppercase">{t("certex.benefits.title")}</h3>
          <Line/>
          <div className="mt-5 flex flex-col lg:flex-row gap-4">          
            <div>
              <h4 className="mb-2 text-sky-600 font-semibold">{t("certex.benefits.workers.title")}</h4>
              <ListPoint
                list={t("certex.benefits.workers.content", { returnObjects: true })}
              />
            </div>
            <div className="mx-auto max-w-[500px] md:min-w-[300px] lg:min-w-[300px] lg:max-w-[300px]">
              <img className="h-full w-auto rounded-lg"
                src="/src/assets/img/certex-worker.png"
                alt="proceso"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col lg:flex-row gap-4 items-center">
            <div>
              <h4 className="mb-4 text-sky-600 font-semibold">{t("certex.benefits.companies.title")}</h4>
              <ListPoint
                list={t("certex.benefits.companies.content", { returnObjects: true })}
              />
            </div>
            <div className="mx-auto max-w-[500px] lg:min-w-[300px] lg:max-w-[300px]">
              <img className="h-full w-auto rounded-lg"
                src="/src/assets/img/certex-corporativo.png"
                alt="proceso"
              />
            </div>
          </div>
        </div>
        {/* Procesos */}
        <div className="mt-10 bg-white p-5 rounded-r-lg shadow-lg border-l-8 border-primary">
          <h3 className="mb-1 text-primary font-bold uppercase">{t("certex.process.title")}</h3>
          <Line/>
          <br />
          <ListPoint
            list={t("certex.process.content", { returnObjects: true })}
            icon={<TbPointFilled style={{color:"var(--primary)"}}/>}
          />
        </div>
      </div>
      {/* Perfiles ocupacionales */}
      <div className="bg-white px-5 md:px-10 lg:px-20 xl:px-40 flex flex-col md:flex-row gap-5">
        <div className="py-10">
          <h2 className="text-primary font-bold uppercase">{t("certex.occupationalProfiles.title")}</h2>
          <Line1 bgColorClass={"bg-secondary"}/>
          <p className="mt-6">{t("certex.occupationalProfiles.content")}</p>
          <div className="pb-3 pt-10">
            <a className="px-6 py-2 min-w-[120px] text-center text-white bg-sky-600 border border-sky-600 rounded active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring"
              href="/contactanos">
              Contactar
            </a>
          </div>
        </div>
        <div className="mx-auto">
          <img className="h-full w-auto"
            src="/src/assets/img/engineer-profile.avif"
            alt="proceso"
          />
        </div>
      </div>
      <div className="bg-gray-100 px-5 md:px-10 lg:px-20 xl:px-40 py-10">
        <Accordian className='flex flex-col gap-3' >
          <AccordianItem value='1' trigger={t("certex.occupationalProfiles.mining.title")}>
            <ListPoint
              list={t("certex.occupationalProfiles.mining.li", { returnObjects: true })}
            />
          </AccordianItem>
          <AccordianItem value='2' trigger={t("certex.occupationalProfiles.basicManagementAreas.title")}>
            <ListPoint
              list={t("certex.occupationalProfiles.basicManagementAreas.li", { returnObjects: true })}
            />
          </AccordianItem>
          <AccordianItem value='3' trigger={t("certex.occupationalProfiles.Administrative.title")}>
            <ListPoint
              list={t("certex.occupationalProfiles.Administrative.li", { returnObjects: true })}
            />
          </AccordianItem>
          <AccordianItem value='4' trigger={t("certex.occupationalProfiles.Industrial.title")}>
            <ListPoint
              list={t("certex.occupationalProfiles.Industrial.li", { returnObjects: true })}
            />
          </AccordianItem>
        </Accordian>
      </div>
      {/* Certificación y acreditación */}
      <div className="bg-white px-5 md:px-10 lg:px-20 xl:px-40 py-10">
        <div className="">
          <h2 className="text-primary font-bold uppercase">{t("certex.certificationAndAccreditation.title")}</h2>
          <Line1 bgColorClass={"bg-secondary"}/>
          <p className="mt-6">{t("certex.certificationAndAccreditation.content")}</p>
        </div>
        <div className="pb-3 pt-10 flex flex-row gap-5">
          <a className="px-6 py-2 min-w-[120px] text-center text-white bg-sky-600 border border-sky-600 rounded active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring"
            href="/contactanos">
            Contactar
          </a>
          <a class="px-6 py-2 min-w-[120px] text-center text-sky-600 border border-sky-600 rounded hover:bg-sky-600 hover:text-white active:bg-sky-500 focus:outline-none focus:ring"
            href="mailto:certex@osha.es">
              <span className="flex flex-row gap-2 items-center">
                <MdOutlineEmail/>
                <span>certex@osha.es</span>
              </span>
          </a>
        </div>
      </div>
    </section>
  );
};
export { Certex }