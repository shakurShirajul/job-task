const StatCardTwo = ({title, progress}) => {
  return (
    <>
      <div className="rounded-xl p-5 bg-[#f7f7ff] text-black border">
        <div className="">
          <div className="stat-title text-black text-lg">{title}</div>
          <div className="flex gap-5">
            <p>4 Assignment</p>
            <ul className="list-disc">
              <li>20 Videos</li>
            </ul>
          </div>

          <div className="flex justify-between gap-10 items-end">
            <div className="flex-1">
              <button className="bg-gradient-to-r from-blue-800 to-blue-200 text-[#1b2a68] btn rounded-full w-full">
                Continue Course
              </button>
            </div>
            {/* Radial Progress */}
            <div
              className="radial-progress text-[#1b2a68]"
              style={{
                "--value": `${progress}`,
                "--size": "5rem",
                "--thickness": "0.5rem",
              }}
              role="progressbar"
            >
              <p className="text-sm text-center rounded-full bg-white p-1">
                {progress}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default StatCardTwo;
