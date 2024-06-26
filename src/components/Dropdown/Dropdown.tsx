import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go'
import Panel from '../Panel'
import { DropdownProps } from './DropdownProps';
import React from 'react';

const Dropdown = ({ options = [], value, onChange}: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const divRef = useRef<HTMLDivElement>(null)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        onChange(option)
    }

    const renderedOptions = options.map((option)=> {
        return <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
      })
      
      useEffect(()=>{
        const handler = (event) => {

          if(!divRef.current) {
            return
          }
          
          if(!divRef.current.contains(event.target)){
            setIsOpen(false)
          }
        }

        document.addEventListener('click', handler, true)

        return () => {
          document.removeEventListener('click',handler)
        }
      },
      [])

    return (
        <div ref={divRef} className='w-48 relative'>
          <Panel className='flex justify-between items-center cursor-pointer' onClick={handleClick}>
            {value?.label || 'Select...'}
            <GoChevronDown className='text-lg' />
        </Panel>
          {isOpen && (<Panel className='absolute top-full'>{ renderedOptions }</Panel>)}
        </div>
      )
}

export default Dropdown