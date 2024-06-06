import ImageWithText from "@/components/ImageWithText";

const Menu: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 mb-12">
        <ImageWithText
          imageUrl="/entradas.jpg"
          text="Entradas"
          linkUrl="/entradas"
        />
        <ImageWithText imageUrl="/faro.jpg" text="Comidas" linkUrl="/comidas" />
        <ImageWithText
          imageUrl="/bloody.jpg"
          text="Bebidas"
          linkUrl="/bebidas"
        />
        <ImageWithText
          imageUrl="/postres.jpg"
          text="Postres"
          linkUrl="/postres"
        />
      </div>
    </div>
  );
};

export default Menu;
