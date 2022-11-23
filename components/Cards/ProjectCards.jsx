import React from "react";
import PropTypes from "prop-types";

import { GithubAltIcon } from "../../Icons/SocialIcons";
import { UpRightFromSquareIcon } from "../../Icons/ArrowIcons";
import { FolderIcons } from "../../Icons/BasicIcons";

const ProjectCards = ({ title, detail, tech, GithubLink = "", Link = "" }) => {
  return (
    <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  dark:bg-gray-800 dark:border-gray-700 ">
      <div className="flex flex-row justify-between items-center mb-5">
        <div>
          <FolderIcons className="w-7 h-7 fill-blue-400" />
        </div>
        <div className="flex flex-row gap-3">
          {Link === "" ? (
            ""
          ) : (
            <a
              href={Link}
              className="text-gray-400 hover:text-white"
              target="_BLANK"
              rel="noreferrer"
            >
              <UpRightFromSquareIcon className="w-7 h-7 font-light fill-gray-400 hover:fill-blue-400" />
            </a>
          )}

          {GithubLink === "" ? (
            ""
          ) : (
            <a
              href={GithubLink}
              className="text-gray-400 hover:text-white"
              target="_BLANK"
              rel="noreferrer"
            >
              <GithubAltIcon className="w-7 h-7 fill-gray-400 hover:fill-blue-400" />
            </a>
          )}
        </div>
      </div>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{detail}</p>
      <ul className="flex flex-row gap-2 font-normal font-thin text-gray-700 dark:text-gray-400 mt-10">
        {tech.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
    </div>
  );
};

ProjectCards.propTypes = {
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  GithubLink: PropTypes.string.isRequired,
  Link: PropTypes.string.isRequired,
};

export default ProjectCards;
