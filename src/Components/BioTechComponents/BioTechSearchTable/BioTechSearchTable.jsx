import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./BioTechSearchTable.scss";
import teslaLogo from "../../../assets/images/teslaLogo.png";
import appleLogo from "../../../assets/images/appleLogo.png";
import googleLogo from "../../../assets/images/googleLogo.png";
import amazonLogo from "../../../assets/images/amazonLogo.png";
import TableStage from "../TableStage/TableStage";
import { Fragment } from "react";

function createData(
  logo,
  company,
  price,
  marketCap,
  stage,
  stageValue,
  majorCatalyst,
  catalystDate
) {
  return {
    logo,
    company,
    price,
    marketCap,
    stage,
    stageValue,
    majorCatalyst,
    catalystDate,
  };
}

const rows = [
  createData(appleLogo, "SPY", "12", 20000, 1, "1", "4", "10"),
  createData(teslaLogo, "QQQ", "24", 20000, 5, "4", "2", "5"),
  createData(amazonLogo, "UNH", "245", 20000, 4, "3", "-3", "-2"),
  createData(googleLogo, "IBB", "234", 20000, 3, "2B", "9", "-5"),
  createData(amazonLogo, "XLV", "35", 20000, 2, "2A", "-3", "-2"),
];

function createSubProductsData(subProduct, indication, stage, stageValue) {
  return {
    subProduct,
    indication,
    stage,
    stageValue,
  };
}

const subProducts = [
  createSubProductsData("ABC", "Dementia", 3, "2B"),
  createSubProductsData("XYZ", "Dementia", 1, "1"),
  createSubProductsData("ABC", "Dementia", 4, "3"),
];

const BioTechSearchTable = () => {
  return (
    <Paper sx={{ width: "100%" }} className="bioTechSearchTableContainer">
      <span className="header">TITLE</span>
      <TableContainer sx={{ height: "75vh" }}>
        <Table stickyHeader aria-label="simple table" size="medium">
          <TableHead>
            <TableRow>
              <TableCell>Sr.No</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Market Cap</TableCell>
              <TableCell>Product/Program</TableCell>
              <TableCell>Indication</TableCell>
              <TableCell>
                <span className="stageHeader">Stage</span>
                <br />
                <span className="stageHeaderWraper">
                  <span className="stageHead one">1</span>
                  <span className="stageHead 2A">2A</span>
                  <span className="stageHead 2B">2B</span>
                  <span className="stageHead three">3</span>
                  <span className="stageHead four">4</span>
                </span>
              </TableCell>
              <TableCell>Stage</TableCell>
              <TableCell>Major Catalyst</TableCell>
              <TableCell>Catalyst Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <Fragment>
                <TableRow key={index} hover>
                  <TableCell scope="row">{index + 1}</TableCell>
                  <TableCell>
                    <img src={row.logo} alt="Company Logo" width={30} />
                    &nbsp; &nbsp;
                    {row.company}
                  </TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.marketCap}</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <TableStage colorCode={row.stage} />
                  </TableCell>
                  <TableCell>{row.stageValue}</TableCell>
                  <TableCell>{row.majorCatalyst}</TableCell>
                  <TableCell>{row.catalystDate}</TableCell>
                </TableRow>
                {subProducts.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>{`${index + 1}. ${
                      product.subProduct
                    }`}</TableCell>
                    <TableCell>{product.indication}</TableCell>
                    <TableCell>
                      <TableStage colorCode={product.stage} />
                    </TableCell>
                    <TableCell>{product.stageValue}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))}

                <TableRow>
                  {[...Array(10)].map((x, i) => (
                    <TableCell key={i} className="trDivider"></TableCell>
                  ))}
                </TableRow>
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default BioTechSearchTable;
