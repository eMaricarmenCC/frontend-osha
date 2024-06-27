import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { List, ListResponsive, ListResponsive3Col } from "../../components/ui/List";
import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line1 } from "../../components/ui/Line";
import { ImageWithInnerBorder } from '../../components/ui/Image';

import { BsPatchCheck } from "react-icons/bs";
import { FaBuildingColumns } from "react-icons/fa6";




function Corporativos() {
  const { t, i18n } = useTranslation("corporativos");
  return(
    <section>
      <Breadcrumbs
        text={t("title")}
        icon={<FaBuildingColumns/>}
        img="/src/assets/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-14">
        <div className="">
          <h1 className="text-primary font-bold uppercase">{t("title")}</h1>
          <Line1 bgColorClass={"bg-secondary"}/>
          <div className="mt-8 flex flex-col lg:flex-row gap-5">
            <div className="">
              <p>{t("content")}</p>
              <h4 className="mt-5 mb-3 text-gray-600 text-primary font-semibold">{t("IndustriesOfInfluence.title")}</h4>
              <ListResponsive
                list= {t("IndustriesOfInfluence.list", { returnObjects: true })}
                icon={<BsPatchCheck style={{color:"var(--primary)"}}/>}
              />
            </div>
            <div className="mx-auto lg:min-w-[400px] xl:min-w-[450px] 2xl:min-w-[550px]">
              <ImageWithInnerBorder
                src="/src/assets/img/corporativo.avif"
                alt="proceso"
              />
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col lg:flex-row gap-5">
          <div className="mx-auto lg:min-w-[400px] xl:min-w-[450px] 2xl:min-w-[550px]">
            <ImageWithInnerBorder
              src="/src/assets/img/corporativo-2.avif"
              alt="proceso"
            />
            </div>
          <div>
            <p>{t("p2")}</p>
            <List
              list={t("li2", { returnObjects: true })}
              icon={<BsPatchCheck style={{color:"var(--primary)"}}/>}
            />
          </div>
        </div>
        <div className="mt-14">
          <h4 className="text-primary font-bold text-center">"{t("phrase")}"</h4>
          <p className="mt-3">{t("p3")}</p>
          <div className="mt-5">
            <ListResponsive3Col
              list={t("li3", { returnObjects: true })}
              icon={<BsPatchCheck style={{color:"var(--primary)"}}/>}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export { Corporativos }