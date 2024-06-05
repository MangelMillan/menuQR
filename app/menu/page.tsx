import ImageWithText from "@/components/ImageWithText";

const Home: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ImageWithText imageUrl="/entradas.jpg" text="Entradas" linkUrl={""} />
        <ImageWithText imageUrl="/faro.jpg" text="Comidas" linkUrl={""} />
        <ImageWithText imageUrl="/bloody.jpg" text="Bebidas" linkUrl={""} />
        <ImageWithText imageUrl="/postres.jpg" text="Postres" linkUrl={""} />
      </div>
    </div>
  );
};

export default Home;
