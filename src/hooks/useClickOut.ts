import React from 'react'

const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T> | null,
  callback: () => void,
): void => {
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref?.current && !ref.current.contains(event?.target as Node)) {
        callback()
      }
    }

    // Adiciona evento de clique fora ao montar o componente
    document.addEventListener('click', handleClickOutside)

    // Remove o evento de clique fora ao desmontar o componente
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [ref, callback])
}

export default useClickOutside
