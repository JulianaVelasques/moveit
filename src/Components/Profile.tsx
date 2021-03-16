import Styles from '../Styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={Styles.profileContainer}>
      <img src="https://github.com/JulianaVelasques.png" alt="" />
      <div>
        <strong>Juliana Velasques</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
