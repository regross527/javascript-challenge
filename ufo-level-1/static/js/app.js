
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
  let datefilter = tableData;
  if (date) {
    datefilter = datefilter.filter(row => row.datetime === date)};
  tablemaker(datefilter);
}

d3.selectAll("#filter-btn").on("click", Click);
tablemaker(tableData);
