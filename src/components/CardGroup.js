import React, { useState } from "react";
import BoltIcon from "../assets/images/boltIcon.svg";
import { CommonButton } from "../common/components/Buttons/Button";
import { ButtonGroup } from "../common/components/Buttons/ButtonGroup/ButtonGroup";
import { CommonCard } from "../common/components/Card/Card";
import { CardBody } from "../common/components/Card/CardBody/CardBody";
import { CardFooter } from "../common/components/Card/Footer/CardFooter";
import { sampleData } from "../data/sampleData";
import "./CardGroup.css";
import SearchFeature from "./SearchFeature";

export const CardGroup = (props) => {
  const [searchData, setSearchData] = useState(sampleData);

  return (
    <>
      <SearchFeature setSearchData={setSearchData} />
      <div className="cardGroup">
        {searchData.map((data) => {
          return (
            <CommonCard>
              <CardBody>
                {/* label  */}
                <p
                  className={
                    data.originType === "Automated" ? "automated" : "manual"
                  }
                >
                  {data.originType === "Automated" ? (
                    <>
                      <img className="icon-image" src={BoltIcon} alt="" />
                      Automated
                    </>
                  ) : (
                    "Manual"
                  )}{" "}
                  Origin
                </p>

                {/* card title  */}
                <span className="title">{data.name}</span>

                {/* intents  */}
                <span className="intents">{data.intents} Intents</span>

                <ButtonGroup>
                  <CommonButton text="View" type="General" />
                  <CommonButton text="Remove" type="Danger" />
                </ButtonGroup>
              </CardBody>

              {/* card footer  */}
              <CardFooter data={data} />
            </CommonCard>
          );
        })}
      </div>
    </>
  );
};
