/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Web Development",
    description:
      "Web development refers to the creation and maintenance of websites, including the structure (HTML), design (CSS), and functionality (JavaScript) of web pages. It encompasses both front-end (user-facing) and back-end (server-side) development.",
    url: "https://www.geeksforgeeks.org/web-development/",
  },
  {
    title: "HTML & CSS",
    description:
      "HTML (HyperText Markup Language) structures the content of web pages by using elements like headings, paragraphs, and images. CSS (Cascading Style Sheets) is used to style and layout these HTML elements, controlling things like colors, fonts, and spacing.",
    url: "https://www.w3schools.com/html/html_css.asp",
  },
  {
    title: "Frontend Development",
    description:
      "A Frontend Developer is responsible for creating the user interface and experience of a website or web application using HTML, CSS, and JavaScript. They ensure that the design is responsive, interactive, and visually appealing across various devices and browsers.",
    url: "https://www.w3schools.com/whatis/whatis_frontenddev.asp",
  },
  {
    title: "My Projects",
    description:
      "Key areas such as front-end technologies, responsive designs, and creative problem-solving through interactive, user-friendly interfaces.",
    url: "https://github.com/AtharvaKupale-Proj",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
