import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { HiServer } from "react-icons/hi";
import { RiGraduationCapFill } from "react-icons/ri";

const CourseProgressCard = () => {
  return (
    <>
      <div>
        <div className="stat bg-[#f7f7ff] rounded-xl">
          <div className="flex justify-between items-center gap-10">
            <div>
              <div className="stat-value">12</div>
              <div className="stat-title">Course  <br />In Progress</div>
            </div>
            <div className="flex flex-col items-end gap-5">
              <div>
                <HiServer className="text-[#4163e9] text-2xl bg-white rounded-full w-10 h-10 p-1.5" />
              </div>
              <div>
                <p className="flex items-center gap-2">
                  <span className="text-sm">1% Decrease</span> <FaArrowTrendDown />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseProgressCard;
