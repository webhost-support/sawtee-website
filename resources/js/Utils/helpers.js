import { useBreakpointValue } from "@chakra-ui/react";

export const categoriesWidgetsHome = {
  6: "events",
  22: "programme",
  25: "sawtee-in-media",
  34: "covid",
  63: "infocus",
};

export function convertToSlug(title) {
    // Replace non-alphanumeric characters with dashes
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    // Remove leading and trailing dashes
    return slug.replace(/^-+|-+$/g, "");
}

export const createMarkupObject = (renderedHtml) => ({ __html: renderedHtml });

export function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export const slugToCamelCase = (string, type, separators) => {
  if (!separators || typeof separators != "string") {
    separators = "-_.";
  }
  let result = string.replace(
    new RegExp("[" + separators + "][a-z]", "ig"),
    function (s) {
      return s.substr(1, 1).toUpperCase();
    }
  );
  return result;
};

export const getBreakpointValue = (value, fallback, ssr) =>
  useBreakpointValue(
    value,
    { fallback: fallback },
    {
      ssr: ssr,
    }
  );

export const fetcher = async (url) => {
    const res = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const error = new Error("An error occurred while fetching the data.");
        // Attach extra info to the error object.
        error.info = await res.json();
        error.status = res.status;
        throw error;
    }

    return res.json();
};

export function splitPosts(data) {
    const firstThreePosts = [];
    const otherPosts = [];

    data.forEach((item, idx) => {
        if (idx < 3) firstThreePosts.push(item);
        else otherPosts.push(item);
    });

    return [firstThreePosts, otherPosts];
}


// export const formatedDate = (date) => dayjs(date).fromNow();

// export function formatDateWithMoment(date, format) {
//   return dayjs(date).format(format ? format : "MMM DD, YYYY");
// }

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novemeber",
  "December",
];

const formatDay = (day) => {
  let dayString = day.toString();
  const lastLetter = dayString[dayString.length - 1];
  let result;
  switch (lastLetter) {
    case "1":
      result = `${day}<sup>st</sup>`;
      break;
    case "2":
      result = `${day}<sup>nd</sup>`;
      break;
    case "3":
      result = `${day}<sup>rd</sup>`;
    default:
      result = `${day}<sup>th</sup>`;
      break;
  }
  return result;
};

export function formatedDate(date) {
  const jsDate = new Date(date);
  const day = jsDate.getDate();
  const month = jsDate.getMonth();
  const year = jsDate.getFullYear();

  return `${formatDay(day)} ${monthNames[month]}, ${year}`;
}

export function formatDate(date) {
  const jsDate = new Date(date);
  const day = jsDate.getDate();
  const month = jsDate.getMonth();
  const year = jsDate.getFullYear();

  return `${day} ${monthNames[month]}, ${year}`;
}

export function isUrl(str) {
  // let regexp =
  //   /(ftp|http|https):\/\/(\w+:?\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!-/]))?/;
  let regexp = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w.-]+)*\/?$/;
  return regexp.test(str);
}

export function debounce(fn) {
  let queued = null;
  return [
    (...args) => {
      if (queued) cancelAnimationFrame(queued);
      queued = requestAnimationFrame(fn.bind(fn, ...args));
    },
    () => {
      cancelAnimationFrame(queued);
    },
  ];
}
