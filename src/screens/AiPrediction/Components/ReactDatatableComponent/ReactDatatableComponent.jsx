import React from "react";
import DataTable from "react-data-table-component";
// import teslaLogo from '../../assets/teslaT.png';
import '../TopHeader/TopHeader.scss';

function ReactDatatableComponent(props) {
  const {noheader} = props;
  // 1. Install React Data Table with npm install react-data-table-component styled-components
  const columns = [
    {
      name: "",
      selector: (row) => row.image,
    },
    {
      name: "",
      selector: (row) => row.title
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "1 Day",
      selector: (row) => row.oneday,
      sortable: true,
      cell: (row) => (
        <div className={row.oneday === "269.80" ? "green_text" : "white_text"}>
          {row.oneday}
        </div>
      ),
    },
    {
      name: "2 Day",
      selector: (row) => row.twoday,
      sortable: true,
      cell: (row) => (
        <div className={row.twoday === "268.00" ? "yellow_text" : "white_text"}>
          {row.twoday}
        </div>
      ),
    },
    {
      name: "3 Day",
      selector: (row) => row.threeday,
      sortable: true,
      cell: (row) => (
        <div className={row.threeday === "265.00" ? "yellow_text" : "white_text"}>
          {row.threeday}
        </div>
      ),
    },
    {
      name: "4 Day",
      selector: (row) => row.fourday,
      sortable: true,
      cell: (row) => (
        <div className={row.fourday === "275.00" ? "green_text" : "white_text"}>
          {row.fourday}
        </div>
      ),
    },
    {
      name: "5 Day",
      selector: (row) => row.fiveday,
      sortable: true,
      cell: (row) => (
        <div className={row.fiveday === "255.00" ? "red_text" : "white_text"}>
          {row.fiveday}
        </div>
      ),
    },
    {
      name: "6 Day",
      selector: (row) => row.sixday,
      sortable: true,
      cell: (row) => (
        <div className={row.sixday === "285.00" ? "green_text" : "white_text"}>
          {row.sixday}
        </div>
      ),
    },
    {
      name: "7 Day",
      selector: (row) => row.sevenday,
      sortable: true,
      cell: (row) => (
        <div className={row.sevenday === "290.00" ? "green_text" : "white_text"}>
          {row.sevenday}
        </div>
      ),
    },
    {
      name: "8 Day",
      selector: (row) => row.eightday,
      sortable: true,
      cell: (row) => (
        <div className={row.eightday === "280.00" ? "red_text" : "white_text"}>
          {row.eightday}
        </div>
      ),
    },
    {
      name: "9 Day",
      selector: (row) => row.nineday,
      sortable: true,
      cell: (row) => (
        <div className={row.nineday === "292.00" ? "green_text" : "white_text"}>
          {row.nineday}
        </div>
      ),
    },
    {
      name: "10 Day",
      selector: (row) => row.tenday,
      sortable: true,
      cell: (row) => (
        <div className={row.tenday === "299.00" ? "green_text" : "white_text"}>
          {row.tenday}
        </div>
      ),
    },
  ];

  const data = [
    {
      image: <div className="sub_logo_wrapper"></div>,
      id: 1,
      title: "TSLA",
      price: "268.00",
      oneday: "269.80",
      twoday: "268.00",
      threeday: "265.00",
      fourday: "275.00",
      fiveday: "255.00",
      sixday: "285.00",
      sevenday: "290.00",
      eightday: "280.00",
      nineday: "292.00",
      tenday: "299.00",
    },
    // {
    //   image: <div className="sub_logo_wrapper"><img src={teslaLogo} alt="Tesla Logo" /></div>,
    //   id: 1,
    //   title: "SPY",
    //   price: "268.00",
    //   oneday: "269.80",
    //   twoday: "268.00",
    //   threeday: "265.00",
    //   fourday: "275.00",
    //   fiveday: "255.00",
    //   sixday: "285.00",
    //   sevenday: "290.00",
    //   eightday: "280.00",
    //   nineday: "292.00",
    //   tenday: "299.00",
    // },
    // {
    //   image: <div className="sub_logo_wrapper"><img src={teslaLogo} alt="Tesla Logo" /></div>,
    //   id: 1,
    //   title: "QQQ",
    //   price: "268.00",
    //   oneday: "269.80",
    //   twoday: "268.00",
    //   threeday: "265.00",
    //   fourday: "275.00",
    //   fiveday: "255.00",
    //   sixday: "285.00",
    //   sevenday: "290.00",
    //   eightday: "280.00",
    //   nineday: "292.00",
    //   tenday: "299.00",
    // },
  ];
  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        dense={true} // maxheight for row
        responsive={true} // responsive
        // selectableRows // checkbox
        highlightOnHover={true} //hightlight on hover
        reorder={true}
        noHeader={noheader}
      />
    </div>
  );
}

export default ReactDatatableComponent;
