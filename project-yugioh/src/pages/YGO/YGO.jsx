import "./YGO.css";

import Counter from "../../components/Counter/Counter";

const YGO = () => {
  return (
    <main>
      <div className="logo">
        {" "}
        <img src="../../../public/4152772-small-removebg-preview.png" alt="" />
      </div>

      <Counter />
    </main>
  );
};

export default YGO;
