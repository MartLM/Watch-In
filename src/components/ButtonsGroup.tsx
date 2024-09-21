import { ArrowLeftIcon, ArrowRightIcon } from "../Icons/ArrowIcon"
import styles from './css/Buttons.module.css'

interface ButtonsGroupProps {
  right: () => void
  left: () => void
}

export default function ButtonsGroup( {right, left} : ButtonsGroupProps) {
  return (
    <nav className={styles['section-buttons']}>
      <button className={styles['button-scroll-list']} aria-label="Scroll left" onClick={left}>
        <ArrowLeftIcon width={20} height={20} aria-hidden="true"/>
      </button>
      <button className={styles['button-scroll-list']} aria-label="Scroll right" onClick={right}>
        <ArrowRightIcon width={20} height={20} aria-hidden="true" />
      </button>
    </nav>
  )
}
