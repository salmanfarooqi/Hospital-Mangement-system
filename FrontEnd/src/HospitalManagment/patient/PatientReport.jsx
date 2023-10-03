import { TotalMedicine } from "../Dashboardcontent/DashboardData";

const PatientReport = () => {
  const filteredArr = TotalMedicine.filter((val, index) => {
    return index < 5;
  });

  return (
    <>
      <div className="chart bg-green-100  h-[300px] mt-2 ml-2 p-8">
        <div className="header flex place-content-between p-4">
          <h1>Patient Report</h1>
          <h2 className="cursor-pointer text-blue-600 font-bold">View All</h2>
        </div>

        <table className="border-collapse patient-report-table">
          <thead>
            <tr>
              <th>img</th>
              <th>Name</th>
              <th>Disease</th>
              <th>Date</th>
              <th>status</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {filteredArr.map((item) => (
              <tr>
                <td>img</td>
                <td>{item.Name}</td>
                <td>{item.disease}</td>
                <td>{item.date}</td>
                <td className="text-blue-600 font-bold cursor-pointer">
                  View Profile
                </td>
                <td className="text-blue-600 font-bold cursor-pointer">
                  View Report
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PatientReport;
