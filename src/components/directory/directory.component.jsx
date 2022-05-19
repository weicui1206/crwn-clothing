import "./style.css";
import DirectoryItem from "./../directory-item/directory-item.component";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    routeName: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jacketts.png",
    routeName: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    routeName: "shop/sneakers",
  },
  {
    id: 4,
    title: "Women",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    routeName: "shop/womens",
  },
  {
    id: 5,
    title: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    routeName: "shop/mens",
  },
];

const Directory = () => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
