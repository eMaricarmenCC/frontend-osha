import React from "react";
import { useTranslation } from "react-i18next";

import { Accordian, AccordianItem } from "../../components/ui/Accordions";
import { List } from "../../components/ui/List";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { ButtonEmailInfo } from "../../components/ui/Button";
import { Line1 } from "../../components/ui/Line";

import { PiSealCheckBold } from "react-icons/pi";
import { FaBuildingColumns } from "react-icons/fa6";


function Sedes() {
  const { t, i18n } = useTranslation("sedes");
  return(
    <section className="bg-white">
      <Breadcrumbs
        text={"Sedes"}
        icon={<FaBuildingColumns/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:pt-16 w-full">
        <h1 className="text-primary uppercase font-bold">{t("locations.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <h3 className="mt-8">{t("locations.authorizedCenter.title")}</h3>
        <h4 className="mt-3 text-primary font-semibold">{t("locations.authorizedCenter.subtitle")}</h4>
        <p className="mt-5">{t("locations.authorizedCenter.description")}</p>
      </div>
      <div className="bg-gray-100 px-5 md:px-10 lg:px-20 xl:px-40 py-10 w-full">
        <div className="">
          <Accordian className='flex flex-col gap-3' >
            <AccordianItem value='1' trigger={t("locations.authorizedCenter.benefits.title")}>
              <List
                list={t("locations.authorizedCenter.benefits.benefits", { returnObjects: true })}
                icon={<PiSealCheckBold style={{color:"var(--secondary)"}}/>}
              />
              <p>{t("locations.authorizedCenter.benefits.content")}</p>
            </AccordianItem>
            <AccordianItem value='2' trigger={t("locations.authorizedCenter.process.title")}>
              <List
                list={t("locations.authorizedCenter.process.process", { returnObjects: true })}
                icon={<PiSealCheckBold style={{color:"var(--secondary)"}}/>}
              />
            </AccordianItem>
            <AccordianItem value='3' trigger={t("locations.authorizedCenter.membershipFees.title")}>
              <List
                list={t("locations.authorizedCenter.membershipFees.membershipFees", { returnObjects: true })}
                icon={<PiSealCheckBold style={{color:"var(--secondary)"}}/>}
              />
            </AccordianItem>
          </Accordian>
        </div>
      </div>
      <div className="bg-white px-5 md:px-10 lg:px-20 xl:px-40 py-10 w-full">
        <p>{t("locations.authorizedCenter.complaints")}</p>
        <ButtonEmailInfo />
      </div>
    </section>
  );
};
export { Sedes }