import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../styles/projectStyles.css';
import Tag from './Tag';
import { Swiper, SwiperSlide, useState } from 'swiper/react';
import 'swiper/css';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


const Project = ({ title, description, image, gitlink, deployedlink, video, videoText, staginglink, tags }) => {
  return (
    <Card className="project-card ">


      <div className="myFlexCard">

        {/* <div className="media-container">
          {video && (
            <video
              src={video}
              controls
              className="project-media"
            />
          )}

          {image && !video && (
            <img
              src={image}
              alt={title}
              className="project-media"
            />
          )}
        </div> */}

<div className="media-container">
  {video ? (
    <video src={video} controls className="project-media" />
  ) : Array.isArray(images) && images.length > 0 ? (
    <Swiper spaceBetween={10} slidesPerView={1}>
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`${title}-${index}`}
            className="project-media"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : image ? (
    <img
      src={image}
      alt={title}
      className="project-media"
    />
  ) : null}
</div>



        <div className="myCard">

          <Card.Body className="d-flex flex-column">

            <Card.Title>{title}</Card.Title>
            <Card.Text className="project-description">{description}</Card.Text>
            {tags && (
              <div className="flex flex-wrap">
                {tags.map((tag) => (

                  <Tag key={tag} name={tag} />
                ))}
              </div>
            )}

            <div className="viewGithubProject">
              {gitlink && (
                <a
                  role="button"
                  tabIndex="0"
                  href={gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto btn viewGithubProject btn-primary custom-btn"
                >
                  View Github Project
                </a>
              )}
            </div>

            {staginglink && (
              <div className="mt-2">
                <a
                  role="button"
                  tabIndex="0"
                  href={staginglink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary custom-btn"
                >
                  View Staging Project
                </a>
              </div>
            )}
            {deployedlink && (
              <div className="mt-2">
                <a
                  role="button"
                  tabIndex="0"
                  href={deployedlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto btn btn-primary custom-btn"
                >
                  View Deployed Project
                </a>
              </div>
            )}
          </Card.Body>
        </div>




      </div>





    </Card>
  );
};

export default Project;