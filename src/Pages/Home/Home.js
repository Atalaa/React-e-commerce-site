import "./Home.css";
import imgHomeShop from "./shopimg.jpg";
export default function Home() {
  return (
    <div className="global-container">
      <h1 className="home-title">
        Welcome to our <span>Shop</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        repudiandae sed placeat tempora corporis mollitia blanditiis vero
        accusantium est ipsum laboriosam laborum, nulla quas aspernatur
        cupiditate non quibusdam minima recusandae.
      </p>
      <img src={imgHomeShop} alt="home shop" />
    </div>
  );
}
