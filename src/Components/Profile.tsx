import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import Styles from '../Styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={Styles.profileContainer}>
      <img src="https://github.com/JulianaVelasques.png" alt="" />
      <div>
        <strong>Juliana Velasques</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
