import clsx from 'clsx';
import './App.css'

function Button({className, ...rest}) {
    return <button className={ clsx('button', className) } {...rest}>Submit</button>
}

function App() {
    return <>
        <Button className='button—small'  style={{ backgroundColor: 'red' }} />
        <Button className='button—medium'  style={{ backgroundColor: 'blue' }} />
        <Button className='button—large'  style={{ backgroundColor: 'green' }} />
    </>
}

export default App
