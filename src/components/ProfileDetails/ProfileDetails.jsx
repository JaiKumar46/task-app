import React, { useState,useEffect } from "react";

let initialState = {
    Name: "",
    Email: "",
    Phone: "",
}

const ProfileDetails = () => {

    const [userDetails, setUserDetails] = useState(initialState);
    const [ProfileData, setProfileData] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const setUserData = () => {
        let name = localStorage.getItem("Name")
          ? JSON.parse(localStorage.getItem("Name"))
          : "";
        let email = localStorage.getItem("Email")
          ? JSON.parse(localStorage.getItem("Email"))
          : "";
        let phone = localStorage.getItem("Phone")
          ? JSON.parse(localStorage.getItem("Phone"))
          : "";
        setUserDetails({ Name: name, Email: email, Phone: phone });
        setProfileData({ Name: name, Email: email, Phone: phone });
    }
    useEffect(() => {
        setUserData();

    }, [])

    let handleEdit = () => {
        localStorage.setItem("Name", JSON.stringify(userDetails.Name));
        localStorage.setItem("Email", JSON.stringify(userDetails.Email));
        localStorage.setItem("Phone", JSON.stringify(userDetails.Phone));

        setUserData();
        setOpenModal(false);
    }
    

  return (
    <div className=" h-auto m-4 p-1 w-[20rem] rounded-lg shadow-md  text-center relative bottom-[25rem] left-[32rem] bg-[#484848]">
      <h1 style={{ color: "white" }}>ProfileDetails</h1>
      <h1>Name:{ProfileData.Name}</h1>
      <h1>Email:{ProfileData.Email}</h1>
          <h1>Phone:{ProfileData
              .Phone}</h1>

      <button
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setOpenModal(!openModal)}
      >
        Edit
      </button>
      {/* Main modal */}
      {openModal && (
        <div
          id="authentication-modal"
          tabIndex={-1}
          className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
          aria-modal="true"
          role="dialog"
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            {/* Modal content */}
            <div className="relative bg-[#9E9E9E] rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="authentication-modal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="py-6 px-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Edit Profile
                </h3>
                <form className="space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={userDetails.Email}
                      onChange={e =>
                        setUserDetails({
                          ...userDetails,
                          Email: e.target.value,
                        })
                      }
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={userDetails.Name}
                      onChange={e =>
                        setUserDetails({
                          ...userDetails,
                          Name: e.target.value,
                        })
                      }
                      required=""
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Phone
                    </label>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      value={userDetails.Phone}
                      onChange={e =>
                        setUserDetails({
                          ...userDetails,
                          Phone: e.target.value,
                        })
                      }
                      required=""
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleEdit}
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
