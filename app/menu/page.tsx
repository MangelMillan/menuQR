import ImageWithText from "@/components/ImageWithText";

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        <ImageWithText imageUrl="/entradas.jpg" text="Entradas" linkUrl="/page1" />
        <ImageWithText imageUrl="/comidas.jpg" text="Comidas" linkUrl="/page2" />
        <ImageWithText imageUrl="/bebidas.jpg" text="Bebidas" linkUrl="/page3" />
        <ImageWithText imageUrl="/postres.jpg" text="Postres" linkUrl="/page4" />
      </div>
    </div>
  );
};

export default Home;
