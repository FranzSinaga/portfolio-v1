const Timeline = () => {
  return (
    <div className="flex justify-end max-w-3xl">
      <div className="mb-4">
        <ul
          className="flex flex-wrap flex-row text-sm font-medium max-w-xs"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className="mr-" role="presentation">
            <button
              className="inline-block w-48 text-left p-4 border-l-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="true"
            >
              Bank Rakyat Indonesia
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block w-48 p-4 text-left border-l-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Lawencon
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className="inline-block w-48 p-4 text-left border-l-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
              id="settings-tab"
              data-tabs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Komunitas Pariwisata <br/>Toba
            </button>
          </li>
          <li role="presentation">
            <button
              className="inline-block w-48 p-4 text-left border-l-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:border-transparent text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700"
              id="contacts-tab"
              data-tabs-target="#contacts"
              type="button"
              role="tab"
              aria-controls="contacts"
              aria-selected="false"
            >
              Jubelio
            </button>
          </li>
        </ul>
      </div>
      <div id="myTabContent" className="w-full">
        <div
          className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <p className="text-md mb-2 text-gray-500 dark:text-gray-400">
            <strong className="font-large text-gray-800 dark:text-white">
              Frontend Developer
            </strong>{" "}
            | March 2021 - Present
          </p>
          <ul className="ml-5 list-disc">
            <li className="text-sm text-gray-500 dark:text-gray-400">
              Building NDS (New Delivery System) applications using Quasar
              Framework (Vue)
            </li>
            <li className="text-sm text-gray-500 dark:text-gray-400">
              Implementing Vuex as state management on web applications to
              facilitate application development
            </li>
            <li className="text-sm text-gray-500 dark:text-gray-400">
              Implement Protobuf (Protocol Buffer) as a communication medium
              between Frontend and Backend to speed up data exchange
            </li>
            <li className="text-sm text-gray-500 dark:text-gray-400">
              Implementing PWAs to optimize web applications
            </li>
            <li className="text-sm text-gray-500 dark:text-gray-400">
              Collaborate with Teams using the Agile Scrum method to speed up
              the web application development process
            </li>
          </ul>
        </div>
        <div
          className="hidden  p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="dashboard"
          role="tabpanel"
          aria-labelledby="dashboard-tab"
        >
          <p className="text-md mb-2 text-gray-500 dark:text-gray-400">
            <strong className="font-large text-gray-800 dark:text-white">
              Frontend Developer
            </strong>{" "}
            | January 2021 - March 2021
          </p>
          <ul className="ml-5 list-disc">
            <li className="text-sm text-gray-500 dark:text-gray-400">
              Building a LinovHR web application using the Angular framework
            </li>
            <li className="text-sm text-gray-500 dark:text-gray-400">
              Implementing Redux as state management on web applications to
              facilitate application development
            </li>
            <li className="text-sm text-gray-500 dark:text-gray-400">
              Working with other developers to implement the RESTFul API in web
              application development
            </li>
          </ul>
        </div>
        <div
          className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="settings"
          role="tabpanel"
          aria-labelledby="settings-tab"
        >
          <p className="text-md mb-2 text-gray-500 dark:text-gray-400">
            <strong className="font-large text-gray-800 dark:text-white">
              Freelance Mobile Developer
            </strong>{" "}
            | October 2020 - January 2021
          </p>
          <ul className="ml-5 list-disc">
            <li className="text-sm text-gray-500 dark:text-gray-400">
              Build a mobile application SIAPPARA-INANGBAO (Sistem Informasi
              Pemungutan dan Pelaporan Retribusi Pasar) using React Native
            </li>
            <li className="text-sm text-gray-500 dark:text-gray-400">
              Designing business processes, databases, and mobile application
              interface displays
            </li>
            <li className="text-sm text-gray-500 dark:text-gray-400">
              Successfully assisted market officials in administering user fees
              at twelve markets in the Humbang Hasundutan district
            </li>
          </ul>
        </div>
        <div
          className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
          id="contacts"
          role="tabpanel"
          aria-labelledby="contacts-tab"
        >
          <p className="text-md mb-2 text-gray-500 dark:text-gray-400">
            <strong className="font-large text-gray-800 dark:text-white">
              Intern Web Developer
            </strong>{" "}
            | October 2020 - January 2021
          </p>
          <ul className="ml-5 list-disc">
            <li className="text-sm text-gray-500 dark:text-gray-400 ">
              Build a Jubelio Finance System using Laravel, a medium for
              recording customer fines on the use of the Jubelio platform so
              that it helps companies increase revenue
            </li>
            <li className="text-sm text-gray-500 dark:text-gray-400">
              Re-engineering the Analisa Data Penjualan Jubelio system to help
              customers improve their sales strategy
            </li>
            <li className="text-sm text-gray-500 dark:text-gray-400">
              Create SQL Query related to transaction reports, to assist users
              in managing finances
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
