import "../App.css";

type Emoti = {
  id: number;
  symbol: string;
  name: string;
  meaning: string;
};

type EmotiShowProps = {
  emoti: Emoti;
};

export default function EmotiShow({ emoti }: EmotiShowProps) {
  if (!emoti.symbol) {
    return (
      <div className="emotis-show">
        <p>Por favor, selecciona un emoti para ver su significado.</p>
      </div>
    );
  }

  return (
    <div className="emotis-show">
      <div>
        <h2>{emoti.name}</h2>
        <p style={{ fontSize: "4rem", margin: "1rem 0" }}>{emoti.symbol}</p>
        <p>{emoti.meaning}</p>
      </div>
    </div>
  );
}
