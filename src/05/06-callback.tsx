import React, {ChangeEvent, MouseEvent} from 'react'

/*const callbeck = (): number => {
  alert('hey')
  return 12;
}
window.setTimeout(callbeck,1000)*/

export const User = () => {

  const search = (event: MouseEvent<HTMLButtonElement>) => {
    alert(event.currentTarget.name);
  }

  const onNameChanged = () => {
    console.log('name changed');
  }
  const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('age changed: ' + event.currentTarget.value);
  }

  const focusLostHandler = () => {
    console.log('focus lost');
  }

  return <div>
    <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimich</textarea>
    <input onChange={onAgeChanged} type={'number'}/>

    <button name='search' tabIndex={1} onClick={search}>search</button>
  </div>
}