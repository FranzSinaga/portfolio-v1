import React from "react";
import { TIMELINE_DATA } from "./data";
import BlurFade from "../ui/blur-fade";

const Timeline = () => {
  return (
    <div className="md:flex md:justify-end max-w-3xl">
      <div className="mb-4">
        <ul
          className="flex flex-wrap flex-row text-sm font-medium md:max-w-xs"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          {TIMELINE_DATA.map((e, index) => (
            <BlurFade key={index} inView delay={0.25 + index * 0.05}>
              <li key={index} className="mr-2" role="presentation">
                <button
                  id={`${e.id}-tab`}
                  data-tabs-target={`#${e.id}`}
                  type="button"
                  role="tab"
                  aria-controls={e.id}
                  aria-selected={index === 0 ? "true" : "false"}
                  className="inline-block md:w-48 text-left p-3 border-b-2 md:border-b-0 border-l-0 md:border-l-2 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500"
                >
                  {e.name}
                </button>
              </li>
            </BlurFade>
          ))}
        </ul>
      </div>
      <div id="myTabContent" className="w-full">
        {TIMELINE_DATA.map((e, index) => (
          <div
            className="p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id={e.id}
            role="tabpanel"
            aria-labelledby={`${e.id}-tab`}
          >
            <BlurFade inView delay={0.25}>
              <p className="text-md mb-2 text-black dark:text-gray-400">
                <strong className="font-large text-gray-800 dark:text-white">
                  {e.role}
                </strong>{" "}
                | {e.periode}
              </p>
            </BlurFade>
            <ul className="ml-5 list-disc">
              {e.responsibility.map((item, index) => (
                <BlurFade key={index} inView delay={0.25 + index * 0.05}>
                  <ListItem item={item} />
                </BlurFade>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const ListItem = ({ item }: { item: string }) => {
  return <li className="text-sm text-black dark:text-gray-400">{item}</li>;
};

export default Timeline;
