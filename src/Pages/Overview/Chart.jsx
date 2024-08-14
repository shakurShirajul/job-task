import ActivityChart from "../../Components/BarCharts/ActivityCharts";

const Chart = () => {
  return (
    <>
      <div className="bg-[#f7f7ff] p-5 rounded-xl space-y-5">
        <div className="flex justify-between items-center">
          <div>
            <p>Course Activiy</p>
          </div>
          <div>
            <p>
              <ul className="list-disc flex gap-10">
                <li className="text-[#198dfa]">Video</li>
                <li className="text-[#1e2e69]">Practice</li>
              </ul>
            </p>
          </div>
          <div>
            <select className="select select-info w-full max-w-xs rounded-full border-none focus:outline-none border-black">
              <option disabled selected>
                Monthly
              </option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
            </select>
          </div>
        </div>
        <ActivityChart />
      </div>
    </>
  );
};
export default Chart;
