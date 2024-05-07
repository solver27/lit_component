import { useContext } from 'react'
import { LITContext } from '../../App'
import './LIT.css';

const LIT = ({ callback }) => {
  const data = useContext(LITContext)

  const onClick = () => {
    callback(data.actions[data.selectedField] + 1)
  }

  return (
    <div className='lit'>
      <label>
        user: {data.selectedField}
      </label>
      <label>
        action: +1
      </label>
      <button onClick={onClick}>
        pass data to parent
      </button>
    </div>
  )
}

export default LIT