import ActivityChart from "../../Components/BarCharts/ActivityCharts";
import Navbar from "../../Components/Navbar/Navbar";
import CompleteCourseCard from "../../Components/StatCards/CompleteCourseCard";
import CourseProgressCard from "../../Components/StatCards/CourseProgressCard";
import StatCard from "../../Components/StatCards/StatCard";
import StatCardTwo from "../../Components/StatCards/StatCardTwo";
import Chart from "./Chart";
import Remainder from "./Remainder";

const Overview = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex gap-10">
        <div className="grid gap-5">
          <StatCard
            title={"Foundation of User Experience (UX) Design"}
            progress={80}
          />
          <StatCardTwo
            title={"Build Wireframes and Low-Fidelity Prototypes"}
            progress={65}
          />
          <StatCardTwo
            title={"Foundation of User Experience (UX) Design"}
            progress={85}
          />
          <StatCardTwo
            title={"Build Wireframes and Low-Fidelity Prototypes"}
            progress={85}
          />
        </div>
        <div className="flex-1 space-y-5">
          {/* Two Stat Card */}
          <div className="flex justify-between gap-5">
            <div className="flex-1">
              <CompleteCourseCard />
            </div>
            <div className="flex-1">
              <CourseProgressCard />
            </div>
          </div>
          {/* Chart */}
          <div className="w-full">
            <Chart />
          </div>
          {/* Table */}
          <div>
            <Remainder />
          </div>
        </div>
      </div>
    </>
  );
};
export default Overview;
