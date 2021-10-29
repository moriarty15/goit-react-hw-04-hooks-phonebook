import style from "./App.module.css";
import React, { Component } from "react";
import Searchbar from "./Components/Searchbar";
import ImageGallery from "./Components/ImageGallery";
import Button from "./Components/Button";
import Modal from "./Components/Modal";

class App extends Component {
  state = {
    query: "",
    page: 1,
    showModal: false,

    large: null,
    alt: null,
  };

  componentDidMount() {
    // if (localStorage.getItem)
    localStorage.setItem("images", "[]");
    window.addEventListener("click", (e) => {
      const findImg = e.target.src;
      const arrImg = JSON.parse(localStorage.getItem("images"));
      const findImgforModal = arrImg.find((e) => e.webformatURL === findImg);
      if (findImgforModal) {
        this.setState({ large: findImgforModal.largeImageURL });
        this.setState({ alt: findImgforModal.user });
        this.setState({ showModal: true });
      }
    });
  }

  onClose = () => {
    this.setState({ showModal: false });
  };

  handleFormSubmit = (query) => {
    this.setState({ query });
    this.setState({ page: 1 });
  };

  clickLoadMore = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { showModal, large, alt, query } = this.state;
    return (
      <div className={style.App}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery query={this.state.query} page={this.state.page} />

        {query !== "" && <Button onClick={this.clickLoadMore} />}
        {showModal && <Modal src={large} onClose={this.onClose} alt={alt} />}
      </div>
    );
  }
}
export default App;
