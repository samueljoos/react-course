import clsx from 'clsx';
import './App.css'

function Button({className, italic=false, ...rest}) {
    return <button className={ clsx('button', className, italic && 'button-italic') } {...rest}>
        Submit
    </button>
}

function App() {
    return <>
        <Button className='button—small' italic={true}  style={{ backgroundColor: 'red' }} />
        <Button className='button—medium'  style={{ backgroundColor: 'blue' }} />
        <Button className='button—large'  style={{ backgroundColor: 'green' }} />
    </>
}

export default App
