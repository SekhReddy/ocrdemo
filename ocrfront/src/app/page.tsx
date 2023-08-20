"use client";

import ProcessImage from "./image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Get started by uploading an image!</p>

        <div>
          By Sekhar Reddy
          <br></br>
          <p>
            <a href="https://linkedin.com/in/sekhreddy">Linkedin</a>
          </p>
        </div>
      </div>

      <div className={styles.center}>
        <h1>OCR DEMO</h1>
      </div>
      <ProcessImage />
      <div className={styles.grid}></div>
    </main>
  );
}
