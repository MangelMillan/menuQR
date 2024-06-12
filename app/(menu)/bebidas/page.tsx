import BackButton from "@/components/BackButton";
import FlipCard from "@/components/flipCard";

export default function Comidas() {
  return (
    <div className="relative min-h-screen  p-4">
      <BackButton />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:gap-28 lg:grid-cols-4 gap-4 w-full max-w-screen-xl mx-auto p-4 ">
        <FlipCard
          frontImageUrl="/entradas/entrada1.jpeg"
          text="Papas Secas"
          backText="Camarones frescos marinados en jugo de limón con cilantro, cebolla y tomate."
          price="$14.99"
        />
        <FlipCard
          frontImageUrl="/entradas/entrada2.jpeg"
          text="Pan con Queso y Hierba"
          backText="Base crujiente rellena de una mezcla cremosa de champiñones y hierbas."
          price="$9.99"
        />
        <FlipCard
          frontImageUrl="/entradas/entrada3.jpeg"
          text="Sushi de Pepino"
          backText="Laminas de zucchini rellenas de queso ricotta, espinacas y hierbas, servidos con salsa de tomate."
          price="$11.99"
        />
        <FlipCard
          frontImageUrl="/entradas/entrada4.jpeg"
          text="Ensalada Caprese"
          backText="Rodajas de tomate y mozzarella fresca, con albahaca y un chorrito de aceite de oliva."
          price="$10.99"
        />
        <FlipCard
          frontImageUrl="/entradas/entrada1.jpeg"
          text="Papas Secas"
          backText="Camarones frescos marinados en jugo de limón con cilantro, cebolla y tomate."
          price="$14.99"
        />
        <FlipCard
          frontImageUrl="/entradas/entrada2.jpeg"
          text="Pan con Queso y Hierba"
          backText="Base crujiente rellena de una mezcla cremosa de champiñones y hierbas."
          price="$9.99"
        />
        <FlipCard
          frontImageUrl="/entradas/entrada3.jpeg"
          text="Sushi de Pepino"
          backText="Laminas de zucchini rellenas de queso ricotta, espinacas y hierbas, servidos con salsa de tomate."
          price="$11.99"
        />
        <FlipCard
          frontImageUrl="/entradas/entrada4.jpeg"
          text="Ensalada Caprese"
          backText="Rodajas de tomate y mozzarella fresca, con albahaca y un chorrito de aceite de oliva."
          price="$10.99"
        />
      </div>
    </div>
  );
}
