import RemainderTable from "../../Components/Tables/RemainderTable";

const Remainder = () => {
  return (
    <>
      <div>
        <div className="rounded-xl p-5 bg-[#f7f7ff]">
          <div className="flex justify-between items-center">
            <p>Remainders</p>
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
          <div className="w-full">
            <RemainderTable/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Remainder;
