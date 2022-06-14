import "./FeaturedItems.css";
import featuredimg1 from "../../images/products/Katsushika_Hokusai-The_Great_Wave_Off_Kanagawa.jpg";
import featuredimg2 from "../../images/products/Jan_Vermeer-Girl_With_A_Pearl_Earring.jpg";
import featuredimg3 from "../../images/products/Gustav_Klimt-The_Kiss.jpg";
import featuredimg4 from "../../images/products/Leonardo_Da_Vinci-Mona_Lisa.jpg";
import featuredimg5 from "../../images/products/Amedeo_Modigliani-Jeanne_Hebuterne_With_Hat_And_Necklace.jpg";
import featuredimg6 from "../../images/products/Gustave_Courbet-The_Desperate_Man.jpg";

function FeaturedItems(props) {
  const FeaturedItem1 = {
    title: "The Great Wave Off Kanagawa",
    artist: "Katsushika Hokusai",
    price: 19.99,
    img: featuredimg1,
  };
  const FeaturedItem2 = {
    title: "Girl With A Pearl Earring",
    artist: "Jan Vermeer",
    price: 19.99,
    img: featuredimg2,
  };
  const FeaturedItem3 = {
    title: "The Kiss",
    artist: "Gustav Klimt",
    price: 19.99,
    img: featuredimg3,
  };
  const FeaturedItem4 = {
    title: "Mona Lisa",
    artist: "Leonardo Da Vinci",
    price: 19.99,
    img: featuredimg4,
  };
  const FeaturedItem5 = {
    title: "Jeanne Hebuterne With Hat And Necklace",
    artist: "Amedeo Modigliani",
    price: 19.99,
    img: featuredimg5,
  };
  const FeaturedItem6 = {
    title: "The Desperate Man",
    artist: "Gustave Courbet",
    price: 19.99,
    img: featuredimg6,
  };

  return (
    <section className="featured-items-container">
      <h2 className="featured-items-main-title">{props.mainTitle}</h2>
      <div className="featured-items-img-container">
        <div className="featured-item featured-item-1">
          <img
            src={FeaturedItem1.img}
            alt="Featured Item 1"
            className="featured-item-img"
          />
          <div className="featured-item-text">
            <h4 className="featured-item-title">{FeaturedItem1.title}</h4>
            <h5 className="featured-item-artist">{FeaturedItem1.artist}</h5>
            <h5 className="featured-item-price">${FeaturedItem1.price}</h5>
          </div>
          <button className="featured-item-btn">Quick View</button>{" "}
        </div>
        <div className="featured-item featured-item-2">
          <img
            src={FeaturedItem2.img}
            alt="Featured Item 2"
            className="featured-item-img"
          />
          <div className="featured-item-text">
            <h4 className="featured-item-title">{FeaturedItem2.title}</h4>
            <h5 className="featured-item-artist">{FeaturedItem2.artist}</h5>
            <h5 className="featured-item-price">${FeaturedItem2.price}</h5>
          </div>
          <button className="featured-item-btn">Quick View</button>{" "}
        </div>
        <div className="featured-item featured-item-3">
          <img
            src={FeaturedItem3.img}
            alt="Featured Item 3"
            className="featured-item-img"
          />
          <div className="featured-item-text">
            <h4 className="featured-item-title">{FeaturedItem3.title}</h4>
            <h5 className="featured-item-artist">{FeaturedItem3.artist}</h5>
            <h5 className="featured-item-price">${FeaturedItem3.price}</h5>
          </div>
          <button className="featured-item-btn">Quick View</button>{" "}
        </div>
        <div className="featured-item featured-item-4">
          <img
            src={FeaturedItem4.img}
            alt="Featured Item 4"
            className="featured-item-img"
          />
          <div className="featured-item-text">
            <h4 className="featured-item-title">{FeaturedItem4.title}</h4>
            <h5 className="featured-item-artist">{FeaturedItem4.artist}</h5>
            <h5 className="featured-item-price">${FeaturedItem4.price}</h5>
          </div>
          <button className="featured-item-btn">Quick View</button>{" "}
        </div>
        <div className="featured-item featured-item-5">
          <img
            src={FeaturedItem5.img}
            alt="Featured Item 5"
            className="featured-item-img"
          />
          <div className="featured-item-text">
            <h4 className="featured-item-title">{FeaturedItem5.title}</h4>
            <h5 className="featured-item-artist">{FeaturedItem5.artist}</h5>
            <h5 className="featured-item-price">${FeaturedItem5.price}</h5>
          </div>
          <button className="featured-item-btn">Quick View</button>{" "}
        </div>
        <div className="featured-item featured-item-6">
          <img
            src={FeaturedItem6.img}
            alt="Featured Item 6"
            className="featured-item-img"
          />
          <div className="featured-item-text">
            <h4 className="featured-item-title">{FeaturedItem6.title}</h4>
            <h5 className="featured-item-artist">{FeaturedItem6.artist}</h5>
            <h5 className="featured-item-price">${FeaturedItem6.price}</h5>
          </div>
          <button className="featured-item-btn">Quick View</button>{" "}
        </div>
      </div>
    </section>
  );
}

export default FeaturedItems;
