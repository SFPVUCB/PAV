export interface Product
//detalle: para que esta interface sea visible para otro componente debemos poner export
{
  name: string;
  price: number;
  image: string;
  // para una variable que puede o no tener un objeto es decir no es obligatorio le consultamos asi:
  category?: string;

}
