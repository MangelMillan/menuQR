import BackButton from "@/components/BackButton";
import FlipCard from "@/components/flipCard";

export default function Comidas() {
  return (
    <div className="relative min-h-screen  p-4">
      <BackButton />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center max-w-screen-lg mx-auto">
        <FlipCard
          frontImageUrl="/entradas/entrada1.jpeg"
          text="Pollo con Limón - $12.99"
          backText="Pan tostado con ajo, cubierto con tomates frescos, albahaca y un toque de aceite de oliva."
        />
        <FlipCard
          frontImageUrl="/entradas/entrada2.jpeg"
          text="Papas Secas - $8.99"
          backText="Camarones frescos marinados en jugo de limón con cilantro, cebolla y tomate."
        />
        <FlipCard
          frontImageUrl="/entradas/entrada3.jpeg"
          text="Pan con Queso y Hierba - $9.99"
          backText="Base crujiente rellena de una mezcla cremosa de champiñones y hierbas."
        />
        <FlipCard
          frontImageUrl="/entradas/entrada4.jpeg"
          text="Sushi de Pepino - $11.99"
          backText="Laminas de zucchini rellenas de queso ricotta, espinacas y hierbas, servidos con salsa de tomate."
        />
        <FlipCard
          frontImageUrl="/entradas/entrada5.jpeg"
          text="Ensalada Caprese - $10.99"
          backText="Rodajas de tomate y mozzarella fresca, con albahaca y un chorrito de aceite de oliva."
        />
        <FlipCard
          frontImageUrl="/entradas/entrada6.jpeg"
          text="Tostadas de Atún - $13.99"
          backText="Tostadas crujientes cubiertas con atún fresco, aguacate, y un toque de salsa picante."
        />
      </div>
    </div>
  );
}
