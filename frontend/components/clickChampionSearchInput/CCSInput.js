import styles from "./CCSInput.module.css";
import Link from "next/link";

export default function CCSInput({ csInput, pickchampionEng }) {
  function dragover(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = "none";
  }

  function changes(e) {
    let champion_name = e.target.value;
    csInput(champion_name);
  }
  const result = `/detail/[id]`;
  return (
    <form className={styles.container}>
      <div className="search">
        <input
          type="search"
          id="search"
          className={styles.input}
          placeholder="챔피언을 검색하세요"
          onChange={changes}
          onDragOver={(event) => {
            dragover(event);
          }}
        />
      </div>
      <Link href={`/detail/${pickchampionEng}`}>
        <button className={styles.btn}>Show</button>
      </Link>
    </form>
  );
}
