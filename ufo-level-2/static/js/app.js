
var tableData = data;
console.log("data :: ", data);

const tableBody = d3.select("#ufo-table tbody");

function tablemaker(stuff) {
  tableBody.html("");

  const col2Data = {
    Date: "datetime",
    City: "city",
    State: "state",
    Country: "country",
    Shape: "shape",
    Duration: "durationMinutes",
    Comments: "comments",
  };

  const cols = [
    "Date",
    "City",
    "State",
    "Country",
    "Shape",
    "Duration",
    "Comments",
  ];

  stuff.forEach((dataRow) => {
    let tableRow = tableBody.append("tr");
    cols.forEach((col) => tableRow.append("th").text(dataRow[col2Data[col]]));
  });
};


function Click() {
  const date = d3.select("#datetime").property("value");
  const city = d3.select("#city").property("value");
  const state = d3.select("#state").property("value");
  const country = d3.select("#country").property("value");
  const shape = d3.select("#shape").property("value");
  let filterdata = tableData;
  if (date) {
    filterdata = filterdata.filter(row => row.datetime === date)};
  if (city) {
    filterdata = filterdata.filter(row => row.city === city)};
  if (state) {
    filterdata = filterdata.filter(row => row.state === state)};
  if (country) {
    filterdata = filterdata.filter(row => row.country === country)};
  if (shape) {
    filterdata = filterdata.filter(row => row.shape === shape)};
  tablemaker(filterdata);
}

d3.selectAll("#filter-btn").on("click", Click);
tablemaker(tableData);
