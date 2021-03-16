import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContexts';
import { CountdownContext } from '../contexts/CountdownContext';
import Styles from '../Styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={Styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={Styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount}</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button type="button" className={Styles.challengeFailedButton} onClick={handleChallengeFailed}>
              Falhei
            </button>
            <button type="button" className={Styles.challengeSucceededButton} onClick={handleChallengeSucceeded}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={Styles.challengeNotActive}>
          <strong> Finalize um ciclo para receber um desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
