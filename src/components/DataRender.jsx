import MainCard2 from "./MainCard2";

const tabs = ["My", "Team", "Assign"];

const data = {
  My: [
    { id: 1, Date: "2023-12-10", CreatedBy: "Admin" , Source : "CarBike360", Name: "Shashi Bushan", Country : "India", State : "Haryana", Requirement : "Not Added", Category : "Lead", InsideAgent: "N/A", Department: "N/A" },
    { id: 2, Date: "2023-12-10", CreatedBy: "Admin" , Source : "CarBike360", Name: "Shashi Bushan", Country : "India", State : "Haryana", Requirement : "Not Added", Category : "Lead", InsideAgent: "N/A", Department: "N/A" },
  ],
  Team: [
    { id: 1, Date: "2023-12-10", CreatedBy: "Admin" , Source : "CarBike360", Name: "Shashi Bushan", Country : "India", State : "Haryana", Requirement : "Not Added", Category : "Lead", InsideAgent: "N/A", Department: "N/A" },
  ],
  Assign: [
    { id: 1, Date: "2023-12-10", CreatedBy: "Admin" , Source : "CarBike360", Name: "Shashi Bushan", Country : "India", State : "Haryana", Requirement : "Not Added", Category : "Lead", InsideAgent: "N/A", Department: "N/A" },
    { id: 2, Date: "2023-12-10", CreatedBy: "Admin" , Source : "CarBike360", Name: "Shashi Bushan", Country : "India", State : "Haryana", Requirement : "Not Added", Category : "Lead", InsideAgent: "N/A", Department: "N/A" },
    { id: 3, Date: "2023-12-10", CreatedBy: "Admin" , Source : "CarBike360", Name: "Shashi Bushan", Country : "India", State : "Haryana", Requirement : "Not Added", Category : "Lead", InsideAgent: "N/A", Department: "N/A" },
  ],
};

export default function DataRender() {
  return (
    <div className="p-4 w-full overflow-y-scroll overflow-x-hidden scrollbar-hide ">
      <MainCard2 tabs={tabs} data={data} />
    </div>
  );
}
