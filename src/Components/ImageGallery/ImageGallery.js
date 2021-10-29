import { Component } from "react";
import PropTypes from 'prop-types'
import style from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem";
import LoaderFoo from "../Loader";

export default class ImageGallery extends Component {
  state = {
    isDone: false,
    showSpiner: false,
  };

  static propTypes = {
    query: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      localStorage.setItem("images", "[]");
      this.fetchRequest();
    } else if (
      this.props.query.trim() !== "" &&
      this.props.page !== prevProps.page
    ) {
      this.fetchRequest();
    }
  }

  fetchRequest = () => {
    this.setState({ showSpiner: true });
    fetch(
      `https://pixabay.com/api/?q=${this.props.query}&page=${this.props.page}&key=23320531-e67f94e9f6229e6b46894ace7&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((r) => r.json())
      .then((hit) => {
        const saveImg = JSON.parse(localStorage.getItem("images"));
        saveImg.push(...hit.hits);
        localStorage.setItem("images", JSON.stringify(saveImg));
        this.setState({ showSpiner: false });
        this.setState({ isDone: true });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });
  };

  render() {
    const images = JSON.parse(localStorage.getItem("images"));
    return (
      <>
        {this.state.isDone && (
          <ul className={style.ImageGallery}>
            {images.length !== 0 &&
              images.map(({id, webformatURL, user}) => (
                <li key={id}>
                  <ImageGalleryItem
                  src={webformatURL}
                  alt={user}
                />
                </li>
              ))}
          </ul>
        )}
        {this.state.showSpiner && (
          <div className={style.centred}>
            <LoaderFoo />
          </div>
        )}
      </>
    );
  }
}
