import { useOutlet } from "react-router-dom";

export const Layout = () => {
  const outlet = useOutlet();

  return (
    <div>
      <div className="lg:pl-60">
        <main>{outlet}</main>
      </div>
    </div>
  );
};
