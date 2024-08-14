const RemainderTable = () => {
  return (
    <>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Type</th>
                <th>Due</th>
                <th>Faculty</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div>
                    <div className="font-bold">Assignment - 1</div>
                    <div className="text-sm opacity-50">
                      Foundation of User Experience
                    </div>
                  </div>
                </td>
                <td>5 June 2024</td>
                <td>
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                    <p className="text-black">Leo John</p>
                  </div>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {/* row 2 */}
              <tr>
                <td>
                  <div>
                    <div className="font-bold">Assignment - 1</div>
                    <div className="text-sm opacity-50">
                      Foundation of User Experience
                    </div>
                  </div>
                </td>
                <td>5 June 2024</td>
                <td>
                  {" "}
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                    <p>Leo John</p>
                  </div>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {/* row 3 */}
              <tr>
                <td>
                  <div>
                    <div className="font-bold">Assignment - 1</div>
                    <div className="text-sm opacity-50">
                      Foundation of User Experience
                    </div>
                  </div>
                </td>
                <td>5 June 2024</td>
                <td>
                  {" "}
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                    <p>Leo John</p>
                  </div>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
              {/* row 4 */}
              <tr>
                <td>
                  <div>
                    <div className="font-bold">Assignment - 1</div>
                    <div className="text-sm opacity-50">
                      Foundation of User Experience
                    </div>
                  </div>
                </td>
                <td>5 June 2024</td>
                <td>
                  {" "}
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                    <p>Leo John</p>
                  </div>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default RemainderTable;
