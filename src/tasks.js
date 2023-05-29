import { useState } from "react";

function Task1() {
  return (
    <div className="basic_component">
      <h1>Halo dunia!</h1>
    </div>
  );
}

function Task1_1(props) {
  return <h1>{props.name}</h1>;
}

function Task2() {
  const [tulisan, setTulisan] = useState("Klik tombol di bawah");

  return (
    <div>
      <h1>{tulisan}</h1>
      <button
        onClick={() => {
          setTulisan("Tombol telah di-klik!");
        }}
      >
        Klik saya!
      </button>
    </div>
  );
}

const students = [
  {
    name: "John Doe",
    age: 20,
    dropout: false,
  },
  {
    name: "Jane Doe",
    age: 21,
    dropout: true,
  },
  {
    name: "John Smith",
    age: 22,
    dropout: false,
  },
  {
    name: "Jane Smith",
    age: 23,
    dropout: true,
  },
];

function Task3() {
  return students.map((e, i) => {
    return (
      <div key={i}>
        <h2>
          {e.name} - {e.age}
        </h2>
      </div>
    );
  });
}

function Task3_1() {
  return students
    .filter((e) => e.dropout === false)
    .map((e, i) => {
      return (
        <div key={i}>
          <h2>
            {e.name} - {e.age}
          </h2>
        </div>
      );
    });
}

function Task4() {
  const [elemenP, setElementP] = useState(true);

  return (
    <div>
      {elemenP && <p>Klik tombol di-bawah untuk menghapus elemen ini</p>}
      <button onClick={() => setElementP(false)}>Hapus</button>
    </div>
  );
}

export { Task1, Task1_1, Task2, Task3, Task3_1, Task4 };
