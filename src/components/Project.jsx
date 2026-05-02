import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";

import "swiper/css";
import "yet-another-react-lightbox/styles.css";

import "../styles/projectStyles.css";
import Tag from "./Tag";

import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Project = ({
  title,
  description,
  image,
  images = [],
  gitlink,
  deployedlink,
  video,
  staginglink,
  tags = [],
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const projectImages = Array.isArray(images) ? images : [];
  const fallbackImages = Array.isArray(image) ? image : image ? [image] : [];
  const galleryImages =
    projectImages.length > 0 ? projectImages : fallbackImages;

  return (
    <Card className="project-card">
      <div className="myFlexCard">
        {(video || galleryImages.length > 0) && (
          <div className="media-container">
            {video ? (
              <video src={video} controls className="project-media" />
            ) : (
              <>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  modules={[Navigation, Pagination]}
                >
                  {galleryImages.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        alt={`${title} screenshot ${index + 1}`}
                        className="project-media"
                        onClick={() => {
                          setImageIndex(index);
                          setLightboxOpen(true);
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                <Lightbox
                  open={lightboxOpen}
                  close={() => setLightboxOpen(false)}
                  index={imageIndex}
                  slides={galleryImages.map((img) => ({ src: img }))}
                />
              </>
            )}
          </div>
        )}

        <div className="myCard">
          <Card.Body className="d-flex flex-column">
            <Card.Title>{title}</Card.Title>

            <Card.Text className="project-description">{description}</Card.Text>

            {Array.isArray(tags) && tags.length > 0 && (
              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <Tag key={`${tag}-${index}`} name={tag} />
                ))}
              </div>
            )}

            {gitlink && (
              <div className="viewGithubProject">
                <a
                  href={gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto btn btn-primary custom-btn"
                >
                  View Github Project
                </a>
              </div>
            )}

            {staginglink && (
              <div className="mt-2">
                <a
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
